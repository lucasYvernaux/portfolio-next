import type frCommon from "../messages/fr/common.json";
import type frMetadata from "../messages/fr/metadata.json";
import type frAbout from "../messages/fr/about.json";
import type frHome from "../messages/fr/home.json";
import type frContact from "../messages/fr/contact.json";
import type frPricing from "../messages/fr/pricing.json";
import type frProjects from "../messages/fr/projects.json";
import type frConsent from "../messages/fr/consent.json";

type Messages = typeof frCommon &
  typeof frMetadata &
  typeof frAbout &
  typeof frHome &
  typeof frContact &
  typeof frPricing &
  typeof frProjects &
  typeof frConsent;

declare module "next-intl" {
  interface AppConfig {
    Messages: Messages;
  }
}
