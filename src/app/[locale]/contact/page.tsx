import SectionHero from "@/src/components/shared/section-hero";
import { Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function ContactPage() {
  const tContact = await getTranslations("Contact");
  const tCommon = await getTranslations("Common");
  return (
    <div className="pt-23 min-h-screen">
      <SectionHero
        path="contact"
        title={tContact("title")}
        intro={tContact("introduction")}
      />
      <section className="relative py-16 md:py-24 bg-background text-foreground">
        <div className="content relative max-w-7xl px-6 md:px-12 mx-auto flex gap-16 flex-col md:flex-row">
          <div className="content-text flex-1">
            <h2 className="font-heading text-2xl text-gray-100 mb-8">
              Contact Information
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
                  className="w-12 h-12 border border-surface-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-gray-400"
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
                  className="size-12 border border-surface-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-gray-400"
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
                  className="w-12 h-12 border border-surface-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-gray-400"
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
            <div className="absolute inset-0 bg-linear-to-b from-background via-background/50 to-background flex items-center justify-center">
              <h3 className="font-serif font-bold tracking-widest bottom-25 relative mb-6 text-primary text-4xl md:text-6xl capitalize rotate-45">
                {tCommon("message.coming")}
              </h3>
            </div>

            <form
              className="space-y-6"
              data-testid="contact-form"
              x-file-name="Contact"
              x-line-number={195}
              x-column={14}
              x-component="form"
              x-id="Contact_195_14"
              x-dynamic="true"
              x-source-type="computed"
              x-source-editable="false"
            >
              <div
                className="grid md:grid-cols-2 gap-6"
                x-file-name="Contact"
                x-line-number={196}
                x-column={16}
                x-component="div"
                x-id="Contact_196_16"
                x-dynamic="false"
              >
                <div
                  x-file-name="Contact"
                  x-line-number={197}
                  x-column={18}
                  x-component="div"
                  x-id="Contact_197_18"
                  x-dynamic="false"
                >
                  <label
                    htmlFor="name"
                    className="block text-gray-400 text-sm mb-2"
                    x-file-name="Contact"
                    x-line-number={198}
                    x-column={20}
                    x-component="label"
                    x-id="Contact_198_20"
                    x-dynamic="true"
                    x-source-type="computed"
                    x-source-editable="false"
                  >
                    <span
                      data-ve-dynamic="true"
                      x-excluded="true"
                      x-file-name="Contact"
                      x-line-number={198}
                      x-column={20}
                      x-component="label"
                      x-id="Contact_198_20_expr1"
                      x-dynamic="true"
                      x-source-type="computed"
                      x-source-editable="false"
                      style={{ display: "contents" }}
                    >
                      Nom
                    </span>{" "}
                    *
                  </label>
                  <input
                    id="name"
                    required
                    className="w-full bg-[#0a0a0a] border border-surface-border focus:border-gold-500 focus:ring-1 focus:ring-gold-500 px-4 py-3 text-gray-100 placeholder-gray-500 transition-colors outline-none"
                    data-testid="contact-input-name"
                    x-file-name="Contact"
                    x-line-number={201}
                    x-column={20}
                    x-component="input"
                    x-id="Contact_201_20"
                    x-dynamic="false"
                    type="text"
                    defaultValue=""
                    name="name"
                  />
                </div>
                <div
                  x-file-name="Contact"
                  x-line-number={212}
                  x-column={18}
                  x-component="div"
                  x-id="Contact_212_18"
                  x-dynamic="false"
                >
                  <label
                    htmlFor="first_name"
                    className="block text-gray-400 text-sm mb-2"
                    x-file-name="Contact"
                    x-line-number={213}
                    x-column={20}
                    x-component="label"
                    x-id="Contact_213_20"
                    x-dynamic="true"
                    x-source-type="computed"
                    x-source-editable="false"
                  >
                    <span
                      data-ve-dynamic="true"
                      x-excluded="true"
                      x-file-name="Contact"
                      x-line-number={213}
                      x-column={20}
                      x-component="label"
                      x-id="Contact_213_20_expr1"
                      x-dynamic="true"
                      x-source-type="computed"
                      x-source-editable="false"
                      style={{ display: "contents" }}
                    >
                      Prénom
                    </span>{" "}
                    *
                  </label>
                  <input
                    id="first_name"
                    required
                    className="w-full bg-[#0a0a0a] border border-surface-border focus:border-gold-500 focus:ring-1 focus:ring-gold-500 px-4 py-3 text-gray-100 placeholder-gray-500 transition-colors outline-none"
                    data-testid="contact-input-firstname"
                    x-file-name="Contact"
                    x-line-number={216}
                    x-column={20}
                    x-component="input"
                    x-id="Contact_216_20"
                    x-dynamic="false"
                    type="text"
                    defaultValue=""
                    name="first_name"
                  />
                </div>
              </div>
              <div
                className="grid md:grid-cols-2 gap-6"
                x-file-name="Contact"
                x-line-number={229}
                x-column={16}
                x-component="div"
                x-id="Contact_229_16"
                x-dynamic="false"
              >
                <div
                  x-file-name="Contact"
                  x-line-number={230}
                  x-column={18}
                  x-component="div"
                  x-id="Contact_230_18"
                  x-dynamic="false"
                >
                  <label
                    htmlFor="company"
                    className="block text-gray-400 text-sm mb-2"
                    x-file-name="Contact"
                    x-line-number={231}
                    x-column={20}
                    x-component="label"
                    x-id="Contact_231_20"
                    x-dynamic="true"
                    x-source-type="computed"
                    x-source-editable="false"
                  >
                    Entreprise (optionnel)
                  </label>
                  <input
                    id="company"
                    className="w-full bg-[#0a0a0a] border border-surface-border focus:border-gold-500 focus:ring-1 focus:ring-gold-500 px-4 py-3 text-gray-100 placeholder-gray-500 transition-colors outline-none"
                    data-testid="contact-input-company"
                    x-file-name="Contact"
                    x-line-number={234}
                    x-column={20}
                    x-component="input"
                    x-id="Contact_234_20"
                    x-dynamic="false"
                    type="text"
                    defaultValue=""
                    name="company"
                  />
                </div>
                <div
                  x-file-name="Contact"
                  x-line-number={244}
                  x-column={18}
                  x-component="div"
                  x-id="Contact_244_18"
                  x-dynamic="false"
                >
                  <label
                    htmlFor="job"
                    className="block text-gray-400 text-sm mb-2"
                    x-file-name="Contact"
                    x-line-number={245}
                    x-column={20}
                    x-component="label"
                    x-id="Contact_245_20"
                    x-dynamic="true"
                    x-source-type="computed"
                    x-source-editable="false"
                  >
                    Poste (optionnel)
                  </label>
                  <input
                    id="job"
                    className="w-full bg-[#0a0a0a] border border-surface-border focus:border-gold-500 focus:ring-1 focus:ring-gold-500 px-4 py-3 text-gray-100 placeholder-gray-500 transition-colors outline-none"
                    data-testid="contact-input-job"
                    x-file-name="Contact"
                    x-line-number={248}
                    x-column={20}
                    x-component="input"
                    x-id="Contact_248_20"
                    x-dynamic="false"
                    type="text"
                    defaultValue=""
                    name="job"
                  />
                </div>
              </div>
              <div
                x-file-name="Contact"
                x-line-number={260}
                x-column={16}
                x-component="div"
                x-id="Contact_260_16"
                x-dynamic="false"
              >
                <label
                  htmlFor="email"
                  className="block text-gray-400 text-sm mb-2"
                  x-file-name="Contact"
                  x-line-number={261}
                  x-column={18}
                  x-component="label"
                  x-id="Contact_261_18"
                  x-dynamic="true"
                  x-source-type="computed"
                  x-source-editable="false"
                >
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    x-file-name="Contact"
                    x-line-number={261}
                    x-column={18}
                    x-component="label"
                    x-id="Contact_261_18_expr1"
                    x-dynamic="true"
                    x-source-type="computed"
                    x-source-editable="false"
                    style={{ display: "contents" }}
                  >
                    Email
                  </span>{" "}
                  *
                </label>
                <input
                  id="email"
                  required
                  className="w-full bg-[#0a0a0a] border border-surface-border focus:border-gold-500 focus:ring-1 focus:ring-gold-500 px-4 py-3 text-gray-100 placeholder-gray-500 transition-colors outline-none"
                  data-testid="contact-input-email"
                  x-file-name="Contact"
                  x-line-number={264}
                  x-column={18}
                  x-component="input"
                  x-id="Contact_264_18"
                  x-dynamic="false"
                  type="email"
                  defaultValue=""
                  name="email"
                />
              </div>
              <div
                x-file-name="Contact"
                x-line-number={276}
                x-column={16}
                x-component="div"
                x-id="Contact_276_16"
                x-dynamic="false"
              >
                <label
                  htmlFor="subject"
                  className="block text-gray-400 text-sm mb-2"
                  x-file-name="Contact"
                  x-line-number={277}
                  x-column={18}
                  x-component="label"
                  x-id="Contact_277_18"
                  x-dynamic="true"
                  x-source-type="computed"
                  x-source-editable="false"
                >
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    x-file-name="Contact"
                    x-line-number={277}
                    x-column={18}
                    x-component="label"
                    x-id="Contact_277_18_expr1"
                    x-dynamic="true"
                    x-source-type="computed"
                    x-source-editable="false"
                    style={{ display: "contents" }}
                  >
                    Sujet
                  </span>{" "}
                  *
                </label>
                <input
                  id="subject"
                  required
                  className="w-full bg-[#0a0a0a] border border-surface-border focus:border-gold-500 focus:ring-1 focus:ring-gold-500 px-4 py-3 text-gray-100 placeholder-gray-500 transition-colors outline-none"
                  data-testid="contact-input-subject"
                  x-file-name="Contact"
                  x-line-number={280}
                  x-column={18}
                  x-component="input"
                  x-id="Contact_280_18"
                  x-dynamic="false"
                  type="text"
                  defaultValue=""
                  name="subject"
                />
              </div>
              <div
                x-file-name="Contact"
                x-line-number={292}
                x-column={16}
                x-component="div"
                x-id="Contact_292_16"
                x-dynamic="false"
              >
                <label
                  htmlFor="message"
                  className="block text-gray-400 text-sm mb-2"
                  x-file-name="Contact"
                  x-line-number={293}
                  x-column={18}
                  x-component="label"
                  x-id="Contact_293_18"
                  x-dynamic="true"
                  x-source-type="computed"
                  x-source-editable="false"
                >
                  <span
                    data-ve-dynamic="true"
                    x-excluded="true"
                    x-file-name="Contact"
                    x-line-number={293}
                    x-column={18}
                    x-component="label"
                    x-id="Contact_293_18_expr1"
                    x-dynamic="true"
                    x-source-type="computed"
                    x-source-editable="false"
                    style={{ display: "contents" }}
                  >
                    Votre message
                  </span>{" "}
                  *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-[#0a0a0a] border border-surface-border focus:border-gold-500 focus:ring-1 focus:ring-gold-500 px-4 py-3 text-gray-100 placeholder-gray-500 transition-colors outline-none resize-none"
                  data-testid="contact-input-message"
                  x-file-name="Contact"
                  x-line-number={296}
                  x-column={18}
                  x-component="textarea"
                  x-id="Contact_296_18"
                  x-dynamic="false"
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-dark-500 font-heading font-bold tracking-wider uppercase px-8 py-4 hover:bg-gold-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed btn-shine"
                data-testid="contact-submit-button"
                x-file-name="Contact"
                x-line-number={329}
                x-column={16}
                x-component="button"
                x-id="Contact_329_16"
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
                  className="lucide lucide-send w-5 h-5"
                  aria-hidden="true"
                  x-file-name="Contact"
                  x-line-number={342}
                  x-column={22}
                  x-component="Send"
                  x-id="Contact_342_22"
                  x-dynamic="false"
                >
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                  <path d="m21.854 2.147-10.94 10.939" />
                </svg>
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
