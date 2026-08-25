"use client";

import Link from "next/link";
import { ContactForm } from "./contact-form";
import { useTranslations } from "next-intl";
import { Mail, MapPin, Phone } from "lucide-react";
import { CalendlySection } from "../calendly/calendly-section";
import { useState } from "react";
import { ContactFormData } from "@/lib/validations/contact.schema";

export default function ContactSection() {
  const tContact = useTranslations("Contact");

  const [prefillData, setPrefillData] = useState<Partial<ContactFormData>>({});
  return (
    <section className="relative py-16 md:py-24 bg-background text-foreground">
      <div className="content relative max-w-7xl px-6 md:px-12 mx-auto flex gap-16 flex-col md:flex-row">
        <div className="content-text flex-1">
          <h2 className="font-heading text-2xl text-gray-100 mb-8">
            {tContact("information.title")}
          </h2>
          <div className="space-y-6 mb-12">
            <Link
              href="mailto:lucas.yvernaux@gmail.com"
              className="flex items-center gap-4 p-4 bg-surface border border-surface-border hover:border-primary/50 transition-colors group"
            >
              <div className="size-12 bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail color="var(--color-primary)" />
              </div>
              <div>
                <p className="text-gray-500 text-sm capitalize">
                  {tContact("information.email")}
                </p>
                <p className="text-gray-100">lucas.yvernaux@gmail.com</p>
              </div>
            </Link>
            <Link
              href="tel:+33651076091"
              className="flex items-center gap-4 p-4 bg-surface border border-surface-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone color="var(--color-primary)" />
              </div>
              <div>
                <p className="text-gray-500 text-sm capitalize">
                  {tContact("information.phone")}
                </p>
                <p className="text-gray-100">+33 6 51 07 60 91</p>
              </div>
            </Link>
            <div className="flex items-center gap-4 p-4 bg-surface border border-surface-border">
              <div className="size-12 bg-primary/10 border border-primary/30 flex items-center justify-center">
                <MapPin color="var(--color-primary)" />
              </div>
              <div>
                <p className="text-gray-500 text-sm capitalize">
                  {tContact("information.location")}
                </p>
                <p className="text-gray-100">France</p>
              </div>
            </div>
            <CalendlySection
              prefillData={prefillData}
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            />
          </div>
          <div>
            <h3 className="font-heading text-lg text-gray-100 mb-4">
              {tContact("information.follow")}
            </h3>
            <div className="flex gap-3">
              <Link
                href="https://www.linkedin.com/in/lucas-yvernaux/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-surface-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                title={tContact("tooltip.linkedin")}
                aria-label="LinkedIn"
                data-testid="contact-linkedin"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width={4} height={12} x={2} y={9} />
                  <circle cx={4} cy={4} r={2} />
                </svg>
              </Link>
              <Link
                href="https://github.com/lucasYvernaux"
                target="_blank"
                rel="noopener noreferrer"
                className="size-12 border border-surface-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                title={tContact("tooltip.github")}
                aria-label="GitHub"
                data-testid="contact-github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </Link>
              <Link
                href="https://gitlab.com/users/lucas.yvernaux/projects"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-surface-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                title={tContact("tooltip.gitlab")}
                aria-label="GitLab"
                data-testid="contact-gitlab"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-gitlab w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="content-form flex-2 relative">
          <ContactForm onValuesChange={setPrefillData} />
        </div>
      </div>
    </section>
  );
}
