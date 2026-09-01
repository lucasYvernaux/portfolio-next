import { siteConfig } from "@/config/site";
import { Link as NavLink } from "@/i18n/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

import Link from "next/link";
import { CookieSettingsTrigger } from "../consent/cookie-settings-trigger";
import Button from "../ui/button";

export async function Footer() {
  const t = await getTranslations("Common");
  return (
    <footer className="bg-gray-custom  z-10 border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src={"/logo-white-gpt.png"}
                  alt="logo de Yvernaux Web Solutions"
                  width={5}
                  height={5}
                  className="size-full"
                />
              </div>
              <div>
                <span className="font-heading text-lg text-gray-100">
                  {siteConfig.companyName}
                </span>
                <p className="text-sm text-gray-500">
                  Création et Maintenance de sites web
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-md mt-4">
              Je construis des sites web robustes, sécurisés et scalables.
              L&apos;IA m&apos;assiste, mais c&apos;est mon expertise qui
              façonne chaque ligne de code.
            </p>

            <div className="flex flex-col gap-1 mt-1">
              <CookieSettingsTrigger />
              <div className="w-fit">
                <Button
                  href="/legal-notice"
                  variant="link"
                  size="mini"
                  style={{ paddingLeft: 0 }}
                  fluid={false}
                  title={t("nav.legalNotice.label")}
                >
                  {t("nav.legalNotice.label")}
                </Button>
              </div>
              <div className="w-fit">
                <Button
                  variant="link"
                  size="mini"
                  style={{ paddingLeft: 0 }}
                  fluid={false}
                  href="/privacy-policy"
                  title={t("nav.privacyPolicy.label")}
                >
                  {t("nav.privacyPolicy.label")}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-heading text-primary mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <NavLink
                className="text-gray-400 hover:text-primary transition-colors text-sm"
                href="/"
                title={t("nav.home.alt")}
              >
                {t("nav.home.label")}
              </NavLink>
              <NavLink
                className="text-gray-400 hover:text-primary transition-colors text-sm"
                href="/about"
                title={t("nav.about.alt")}
              >
                {t("nav.about.label")}
              </NavLink>
              <NavLink
                className="text-gray-400 hover:text-primary transition-colors text-sm"
                href="/projects"
                title={t("nav.projects.alt")}
              >
                {t("nav.projects.label")}
              </NavLink>
              <NavLink
                className="text-gray-400 hover:text-primary transition-colors text-sm"
                href="/pricing"
                title={t("nav.pricing.alt")}
              >
                {t("nav.pricing.label")}
              </NavLink>
              <NavLink
                className="text-gray-400 hover:text-primary transition-colors text-sm"
                href="/contact"
                title={t("nav.contact.alt")}
              >
                {t("nav.contact.label")}
              </NavLink>
            </nav>
          </div>
          <div className="flex-1">
            <h4 className="text-primary mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <Link
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
              >
                <Mail size={16} />
                {siteConfig.email}
              </Link>
              <Link
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
              >
                <Phone size={16} />
                {siteConfig.telephone}
              </Link>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={16} />
                France
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Link
                href="https://www.Linkedin.com/in/lucas-yvernaux/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-surface-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-gray-400"
                aria-label="NavLinkedIn"
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
                  className="lucide lucide-NavLinkedin w-5 h-5"
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
                className="w-10 h-10 border border-surface-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-gray-400"
                aria-label="GitHub"
                data-testid="social-github"
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
                className="w-10 h-10 border border-surface-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-gray-400"
                aria-label="GitLab"
                data-testid="social-gitlab"
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
        <div className="border-t border-surface-border mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            {t("footer.copyright", {
              year: new Date().getFullYear(),
              company: siteConfig.companyName,
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
