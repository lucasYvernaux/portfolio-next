"use client";

import { Link as NavLink } from "@/src/i18n/navigation";
import Image from "next/image";

import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="bg-gray-custom  z-10 border-t border-surface-border"
      data-testid="footer"
      x-file-name="Footer"
      x-line-number={11}
      x-column={4}
      x-component="footer"
      x-id="Footer_11_4"
      x-dynamic="false"
    >
      <div
        className="max-w-7xl mx-auto px-6 md:px-12 py-16"
        x-file-name="Footer"
        x-line-number={12}
        x-column={6}
        x-component="div"
        x-id="Footer_12_6"
        x-dynamic="false"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          x-file-name="Footer"
          x-line-number={13}
          x-column={8}
          x-component="div"
          x-id="Footer_13_8"
          x-dynamic="false"
        >
          <div
            className="md:col-span-2"
            x-file-name="Footer"
            x-line-number={15}
            x-column={10}
            x-component="div"
            x-id="Footer_15_10"
            x-dynamic="false"
          >
            <div
              className="flex items-center gap-3 mb-4"
              x-file-name="Footer"
              x-line-number={16}
              x-column={12}
              x-component="div"
              x-id="Footer_16_12"
              x-dynamic="false"
            >
              <div
                className="w-10 h-10 flex items-center justify-center"
                x-file-name="Footer"
                x-line-number={17}
                x-column={14}
                x-component="div"
                x-id="Footer_17_14"
                x-dynamic="false"
              >
                <Image
                  src={"/logo-white-gpt.png"}
                  alt="logo de Yvernaux Web Solutions"
                  width={5}
                  height={5}
                  className="size-full"
                />
              </div>
              <div
                x-file-name="Footer"
                x-line-number={20}
                x-column={14}
                x-component="div"
                x-id="Footer_20_14"
                x-dynamic="false"
              >
                <span
                  className="font-heading text-lg text-gray-100"
                  x-file-name="Footer"
                  x-line-number={21}
                  x-column={16}
                  x-component="span"
                  x-id="Footer_21_16"
                  x-dynamic="true"
                  x-source-type="computed"
                  x-source-editable="false"
                >
                  Yvernaux Web Solutions
                </span>
                <p
                  className="text-sm text-gray-500"
                  x-file-name="Footer"
                  x-line-number={22}
                  x-column={16}
                  x-component="p"
                  x-id="Footer_22_16"
                  x-dynamic="true"
                  x-source-type="computed"
                  x-source-editable="false"
                >
                  Création et Maintenance de sites web
                </p>
              </div>
            </div>
            <p
              className="text-gray-400 text-sm max-w-md mt-4"
              x-file-name="Footer"
              x-line-number={25}
              x-column={12}
              x-component="p"
              x-id="Footer_25_12"
              x-dynamic="true"
              x-source-type="computed"
              x-source-editable="false"
            >
              Je construis des sites web robustes, sécurisés et scalables.
              L&apos;IA m&apos;assiste, mais c&apos;est mon expertise qui
              façonne chaque ligne de code.
            </p>
          </div>
          <div
            x-file-name="Footer"
            x-line-number={31}
            x-column={10}
            x-component="div"
            x-id="Footer_31_10"
            x-dynamic="false"
          >
            <h4
              className="font-heading text-primary mb-4"
              x-file-name="Footer"
              x-line-number={32}
              x-column={12}
              x-component="h4"
              x-id="Footer_32_12"
              x-dynamic="false"
            >
              Navigation
            </h4>
            <nav
              className="flex flex-col gap-2"
              x-file-name="Footer"
              x-line-number={33}
              x-column={12}
              x-component="nav"
              x-id="Footer_33_12"
              x-dynamic="false"
            >
              <NavLink
                className="text-gray-400 hover:text-primary transition-colors text-sm"
                href="/"
                data-discover="true"
              >
                Accueil
              </NavLink>
              <NavLink
                className="text-gray-400 hover:text-primary transition-colors text-sm"
                href="/about"
                data-discover="true"
              >
                À propos
              </NavLink>
              <NavLink
                className="text-gray-400 hover:text-primary transition-colors text-sm"
                href="/projects"
                data-discover="true"
              >
                Réalisations
              </NavLink>
              <NavLink
                className="text-gray-400 hover:text-primary transition-colors text-sm"
                href="/pricing"
                data-discover="true"
              >
                Tarifs
              </NavLink>
              <NavLink
                className="text-gray-400 hover:text-primary transition-colors text-sm"
                href="/contact"
                data-discover="true"
              >
                Contact
              </NavLink>
            </nav>
          </div>
          <div
            x-file-name="Footer"
            x-line-number={53}
            x-column={10}
            x-component="div"
            x-id="Footer_53_10"
            x-dynamic="false"
          >
            <h4
              className="font-heading text-primary mb-4"
              x-file-name="Footer"
              x-line-number={54}
              x-column={12}
              x-component="h4"
              x-id="Footer_54_12"
              x-dynamic="false"
            >
              Contact
            </h4>
            <div
              className="flex flex-col gap-3"
              x-file-name="Footer"
              x-line-number={55}
              x-column={12}
              x-component="div"
              x-id="Footer_55_12"
              x-dynamic="false"
            >
              <Link
                href="mailto:lucas.yvernaux@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
                data-testid="footer-email"
                x-file-name="Footer"
                x-line-number={56}
                x-column={14}
                x-component="a"
                x-id="Footer_56_14"
                x-dynamic="true"
                x-source-type="computed"
                x-source-editable="false"
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
                  className="lucide lucide-mail w-4 h-4"
                  aria-hidden="true"
                  x-file-name="Footer"
                  x-line-number={61}
                  x-column={16}
                  x-component="Mail"
                  x-id="Footer_61_16"
                  x-dynamic="false"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x={2} y={4} width={20} height={16} rx={2} />
                </svg>
                lucas.yvernaux@gmail.com
              </Link>
              <Link
                href="tel:+33651076091"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
                data-testid="footer-phone"
                x-file-name="Footer"
                x-line-number={64}
                x-column={14}
                x-component="a"
                x-id="Footer_64_14"
                x-dynamic="true"
                x-source-type="computed"
                x-source-editable="false"
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
                  className="lucide lucide-phone w-4 h-4"
                  aria-hidden="true"
                  x-file-name="Footer"
                  x-line-number={69}
                  x-column={16}
                  x-component="Phone"
                  x-id="Footer_69_16"
                  x-dynamic="false"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                06.51.07.60.91
              </Link>
              <div
                className="flex items-center gap-2 text-gray-400 text-sm"
                x-file-name="Footer"
                x-line-number={72}
                x-column={14}
                x-component="div"
                x-id="Footer_72_14"
                x-dynamic="true"
                x-source-type="computed"
                x-source-editable="false"
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
                  className="lucide lucide-map-pin w-4 h-4"
                  aria-hidden="true"
                  x-file-name="Footer"
                  x-line-number={73}
                  x-column={16}
                  x-component="MapPin"
                  x-id="Footer_73_16"
                  x-dynamic="false"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                France
              </div>
            </div>
            <div
              className="flex gap-3 mt-6"
              x-file-name="Footer"
              x-line-number={79}
              x-column={12}
              x-component="div"
              x-id="Footer_79_12"
              x-dynamic="false"
            >
              <Link
                href="https://www.Linkedin.com/in/lucas-yvernaux/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-surface-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-gray-400"
                aria-label="NavLinkedIn"
                data-testid="social-NavLinkedin"
                x-file-name="Footer"
                x-line-number={80}
                x-column={14}
                x-component="a"
                x-id="Footer_80_14"
                x-dynamic="false"
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
                  x-file-name="Footer"
                  x-line-number={88}
                  x-column={16}
                  x-component="NavLinkedin"
                  x-id="Footer_88_16"
                  x-dynamic="false"
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
                x-file-name="Footer"
                x-line-number={90}
                x-column={14}
                x-component="a"
                x-id="Footer_90_14"
                x-dynamic="false"
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
                  x-file-name="Footer"
                  x-line-number={98}
                  x-column={16}
                  x-component="Github"
                  x-id="Footer_98_16"
                  x-dynamic="false"
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
                x-file-name="Footer"
                x-line-number={100}
                x-column={14}
                x-component="a"
                x-id="Footer_100_14"
                x-dynamic="false"
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
                  x-file-name="Footer"
                  x-line-number={108}
                  x-column={16}
                  x-component="GitlabIcon"
                  x-id="Footer_108_16"
                  x-dynamic="false"
                >
                  <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="border-t border-surface-border mt-12 pt-8 text-center"
          x-file-name="Footer"
          x-line-number={115}
          x-column={8}
          x-component="div"
          x-id="Footer_115_8"
          x-dynamic="false"
        >
          <p
            className="text-gray-500 text-sm"
            x-file-name="Footer"
            x-line-number={116}
            x-column={10}
            x-component="p"
            x-id="Footer_116_10"
            x-dynamic="true"
            x-source-type="unknown"
            x-source-var="currentYear"
            x-source-editable="false"
          >
            ©{" "}
            <span
              data-ve-dynamic="true"
              x-excluded="true"
              x-file-name="Footer"
              x-line-number={116}
              x-column={10}
              x-component="p"
              x-id="Footer_116_10_expr1"
              x-dynamic="true"
              x-source-type="unknown"
              x-source-var="currentYear"
              x-source-editable="false"
              style={{ display: "contents" }}
            >
              2026
            </span>{" "}
            <span
              data-ve-dynamic="true"
              x-excluded="true"
              x-file-name="Footer"
              x-line-number={116}
              x-column={10}
              x-component="p"
              x-id="Footer_116_10_expr3"
              x-dynamic="true"
              x-source-type="computed"
              x-source-editable="false"
              style={{ display: "contents" }}
            >
              Yvernaux Web Solutions
            </span>
            .{" "}
            <span
              data-ve-dynamic="true"
              x-excluded="true"
              x-file-name="Footer"
              x-line-number={116}
              x-column={10}
              x-component="p"
              x-id="Footer_116_10_expr5"
              x-dynamic="true"
              x-source-type="computed"
              x-source-editable="false"
              style={{ display: "contents" }}
            >
              Tous droits réservés
            </span>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
