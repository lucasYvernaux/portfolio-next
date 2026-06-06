import ContactSection from "@/src/components/feature/contact/contact-section";
import SectionHero from "@/src/components/shared/section-hero";
import { getTranslations } from "next-intl/server";

export default async function ContactPage() {
  const tContact = await getTranslations("Contact");

  return (
    <div className="pt-23 min-h-screen">
      <SectionHero
        path="contact"
        title={tContact("title")}
        intro={tContact("introduction")}
      />
      <ContactSection />
    </div>
  );
}
