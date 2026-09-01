"use client";

import { createContext, useContext, useState, useCallback } from "react";
import type {
  ConsentRecord,
  ConsentPostBody,
  CookieCategory,
} from "@/types/consent";

interface ConsentContextValue {
  consent: ConsentRecord | null;
  isBannerVisible: boolean;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  hasConsent: (category: CookieCategory) => boolean;
  submit: (body: ConsentPostBody) => Promise<void>;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({
  initialConsent,
  children,
}: {
  initialConsent: ConsentRecord | null;
  children: React.ReactNode;
}) {
  const [consent, setConsent] = useState(initialConsent);
  const [isModalOpen, setModalOpen] = useState(false);

  const submit = useCallback(async (body: ConsentPostBody) => {
    const res = await fetch("/api/consent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) return;
    const data = await res.json();
    setConsent(data.record);
    setModalOpen(false);
  }, []);

  const hasConsent = useCallback(
    (category: CookieCategory) =>
      category === "necessary" || consent?.choices[category] === true,
    [consent],
  );

  return (
    <ConsentContext.Provider
      value={{
        consent,
        isBannerVisible: consent === null,
        isModalOpen,
        openModal: () => setModalOpen(true),
        closeModal: () => setModalOpen(false),
        hasConsent,
        submit,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx)
    throw new Error("useConsent doit être utilisé dans un ConsentProvider");
  return ctx;
}
