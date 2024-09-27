import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "../../public/assets/fontawesome/css/all.min.css";
import Script from "next/script";
import { ThemeProvider } from "./context/ThemeContext";
import { SidebarProvider } from "./context/SidebarContext";
import { UserProvider } from "./context/UserContext";
import { MessageProvider } from "./context/MessageContext";
import { GalleryProvider } from "./context/GalleryContext";
import { GridProvider } from "./context/GridContext";
import { ImageProvider } from "./context/ImageContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: `AI Image Generator - Create Your Own Images in One Click with ${process.env.NEXT_PUBLIC_APP_NAME}`,
  description:
    "Use our AI image generator to create unique images. Perfect for artists, designers, and anyone looking to explore creativity with artificial intelligence.",
  keywords: `image generator, AI, artificial intelligence, image creation, digital art, ${process.env.NEXT_PUBLIC_APP_NAME}`,
  authors: { name: process.env.NEXT_PUBLIC_APP_NAME },
  openGraph: {
    title: "AI Image Generator",
    description: "Create unique images with our AI image generator.",
    images: [{ url: `${process.env.NEXT_PUBLIC_APP_URL}/landscape.png` }],
    url: process.env.NEXT_PUBLIC_APP_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Image Generator",
    description: "Create unique images with our AI image generator.",
    images: [`${process.env.NEXT_PUBLIC_APP_URL}/logo.png`],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-150`}>
        <ThemeProvider>
          <SidebarProvider>
            <UserProvider>
              <GalleryProvider>
                <GridProvider>
                  <MessageProvider>
                    <ImageProvider>{children}</ImageProvider>
                  </MessageProvider>
                </GridProvider>
              </GalleryProvider>
            </UserProvider>
          </SidebarProvider>
        </ThemeProvider>

        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
