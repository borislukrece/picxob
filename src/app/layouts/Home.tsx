"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Main from "../main";
import HeaderComponent from "@/components/HeaderComponent";
import ResizableTextArea from "@/components/ResizableTextArea";
import { useMessage } from "../context/MessageContext";

const CONSENT_KEY = "picxob_user_consent";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const { newMessage, loadingMessage, messages } = useMessage();

  const [message, setMessage] = useState("");
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleConsentClose = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setShowConsent(false);
  };

  const handleInput = (input: FormEvent<HTMLTextAreaElement>) => {
    setMessage(input.currentTarget.value);
  };

  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    if (event && event !== undefined) {
      event.preventDefault();
    }

    if (message && !loadingMessage) {
      handleConsentClose();
      newMessage("user", message);
      setMessage("");
    }
  };

  const conversationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (conversationRef.current) {
      conversationRef.current.scrollTo({
        top: conversationRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <Main>
      <div className="w-full full-height flex flex-col">
        <div className="w-full min-h-[4.5rem]">
          <HeaderComponent />
        </div>

        <div
          ref={conversationRef}
          className="container-conversation flex-1 custom-scroll-bar overflow-x-hidden">
          <div className="h-full max-w-3xl mx-auto">
            <div className="w-full h-full px-4">{children}</div>
          </div>
        </div>

        <div className="w-full">

          <div className="max-w-3xl mx-auto py-4 px-4 relative">
            {showConsent && (
              <div className="consent w-full bg-[var(--hover)] py-2 px-2 rounded-3xl overflow-hidden my-2">
                <div className="w-full flex items-center justify-between">
                  <div className="flex-1 text-sm px-2 py-2">
                    By using this generator, you agree to our Terms of Service, acknowledge our Privacy Policy, and consent to the use of cookies.
                  </div>

                  <div className="transition-all duration-150">
                    <button onClick={handleConsentClose} title="Close" type="button" className="w-6 h-6 flex items-center justify-center bg-[var(--background)] text-[var(--foreground-nosys)] rounded-full active:scale-95">
                      <i className="fa-solid fa-close"></i>
                    </button>
                  </div>
                </div>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              method="POST"
              action="#"
              className="w-full bg-[var(--hover)] py-2 px-2 rounded-3xl overflow-hidden">
              <div className="w-full h-full flex justify-center items-end">
                <div className="flex-1 px-2">
                  <ResizableTextArea
                    onInput={handleInput}
                    onSubmit={() => handleSubmit()}
                    value={message}
                    maxLength={880}
                    placeholder={`Image ${process.env.NEXT_PUBLIC_APP_NAME}`}
                  />
                </div>
                <div className="form-submit transition-all duration-150">
                  <button
                    type="submit"
                    title="Send"
                    className={`text-4xl ${loadingMessage ? null : "text-[var(--foreground-nosys)]"
                      }`}>
                    {!loadingMessage ? (
                      <i className="fa-solid fa-circle-arrow-up"></i>
                    ) : (
                      <div>
                        <span className="loader"></span>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </form>

            <div className="text-sm text-center px-2 py-2">
              ⚠️ The generator does not remember previous requests. Please rephrase your prompt each time.
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default HomeLayout;
