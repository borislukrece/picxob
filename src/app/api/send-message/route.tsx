import { NextRequest } from "next/server";
import { TokenPayload } from "google-auth-library";
import { generateUUID, getImageMime } from "@/utils/helpers";
import { getUser } from "@/libs/google-client";
import cloudinary from "@/libs/cloudinary-client";
import prisma from "@/libs/prisma";


export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return Response.json({ error: "No prompt provided" });
    }

    const authorization = request.headers.get("Authorization");
    const token = authorization?.split(" ")[1] || "";

    const user: TokenPayload | null = await getUser(token);

    const sub = user ? user.sub : null;
    const uuid = generateUUID();
    const cleanedPrompt = prompt.trim().substring(0, 880);

    const exist = await prisma.images.findFirst({
      where: {
        sub: sub,
        prompt: cleanedPrompt,
      },
      select: {
        id: true,
        sub: true,
        uri: true,
        prompt: true,
        token: true,
        createdAt: true,
        updatedAt: true
      },
    });

    if (exist) {
      return Response.json({ image: exist }, { status: 201 });
    }

    const IAResponse = await fetch(
      "https://router.huggingface.co/nebius/v1/images/generations",
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGING_FACE_TOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          prompt: prompt,
          model: "black-forest-labs/flux-dev",
          response_format: "b64_json"
        }),
      }
    );

    if (!IAResponse.ok) {
      const errorText = await IAResponse.text();
      throw new Error(
        `HTTP error! status: ${IAResponse.status}, message: ${errorText}`
      );
    }

    const result = await IAResponse.json();

    const b64json = await result.data[0].b64_json;
    const mimeType = getImageMime(b64json) || "image/png";
    const extension = mimeType.split("/")[1];

    const base64data: string = b64json;

    const uploadToCloudinary = await cloudinary.uploader.upload(
      `data:${mimeType};base64,${base64data}`,
      {
        resource_type: "image",
        format: extension,
        upload_preset: "ml_default",
      }
    );

    const uri = uploadToCloudinary.secure_url;

    const data = {
      sub: sub,
      token: uuid,
      uri: uri,
      prompt: cleanedPrompt,
    };

    const createdImage = await prisma.images.create({
      data: {
        sub: data.sub,
        token: data.token,
        uri: data.uri,
        prompt: data.prompt,
      },
      select: {
        id: true,
        sub: true,
        uri: true,
        prompt: true,
        token: true,
        createdAt: true,
        updatedAt: true
      },
    });

    return Response.json({ image: createdImage }, { status: 201 });
  } catch (error) {
    const err = error as Error;
    console.log(err);
    return Response.json(
      { message: `Failed to send message`, error: err.message },
      {
        status: 500,
      }
    );
  }
}
