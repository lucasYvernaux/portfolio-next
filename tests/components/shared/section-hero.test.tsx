import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";

// Helper pour wrapper les composants avec i18n
function renderWithIntl(component: React.ReactElement, messages = {}) {
  return render(
    <NextIntlClientProvider locale="fr" messages={messages}>
      {component}
    </NextIntlClientProvider>,
  );
}

// Exemple simplifié — adapter selon tes composants
describe("SectionHero", () => {
  it("affiche le titre et le sous-titre", () => {
    // À adapter selon le composant réel
    renderWithIntl(
      <h1>Test</h1>, // remplacer par ton composant
      { Home: { hero: { title: "Mon titre" } } },
    );
    // expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
