// .storybook/messages.ts
import metadata from "../src/messages/fr/metadata.json";
import common from "../src/messages/fr/common.json";
import home from "../src/messages/fr/home.json";
import about from "../src/messages/fr/about.json";
import contact from "../src/messages/fr/contact.json";
import projects from "../src/messages/fr/projects.json";
import pricing from "../src/messages/fr/pricing.json";
import consent from "../src/messages/fr/consent.json";
import legal from "../src/messages/fr/legal.json";

export const frMessages = {
  ...metadata,
  ...common,
  ...home,
  ...about,
  ...contact,
  ...projects,
  ...pricing,
  ...consent,
  ...legal,
};
