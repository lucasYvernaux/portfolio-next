import type frCommon from "../messages/fr/common.json";
import type frMetadata from "../messages/fr/metadata.json";
import type frAbout from "../messages/fr/about.json";

type Messages = typeof frCommon & typeof frMetadata & typeof frAbout;

declare module "next-intl" {
  interface AppConfig {
    Messages: Messages;
  }
}
