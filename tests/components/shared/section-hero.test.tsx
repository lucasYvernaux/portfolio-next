import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import SectionHero from "@/components/shared/section-hero";

// Mock de la primitive heading pour éviter les dépendances externes complexes
vi.mock("@/lib/utils/primitives", () => ({
  heading: vi.fn().mockReturnValue("mocked-heading-class"),
}));

describe("SectionHero Component", () => {
  const defaultProps = {
    path: "contact",
    title: "nous contacter",
  };

  it("rend correctement avec les propriétés requises", async () => {
    // Résolution du composant asynchrone
    const ResolvedComponent = await SectionHero(defaultProps);
    render(ResolvedComponent);

    // Vérification du chemin (path) formaté avec '//'
    const pathElement = screen.getByText("// contact");
    expect(pathElement).toBeDefined();
    expect(pathElement.className).toContain("text-primary");

    // Vérification du titre (title)
    const titleElement = screen.getByRole("heading", { level: 1 });
    expect(titleElement.textContent).toBe("nous contacter");
    expect(titleElement.className).toContain("mocked-heading-class");
  });

  it("rend l'introduction lorsque la prop 'intro' est fournie", async () => {
    const propsWithIntro = {
      ...defaultProps,
      intro: "Une courte introduction pour le test.",
    };

    const ResolvedComponent = await SectionHero(propsWithIntro);
    render(ResolvedComponent);

    const introElement = screen.getByText(
      "Une courte introduction pour le test.",
    );
    expect(introElement).toBeDefined();
    expect(introElement.className).toContain("text-xl");
  });

  it("ne rend pas de paragraphe d'introduction si la prop 'intro' est absente", async () => {
    const ResolvedComponent = await SectionHero(defaultProps);
    const { container } = render(ResolvedComponent);

    // L'élément avec la classe text-xl ne devrait pas être présent
    const introElement = container.querySelector(".text-xl");
    expect(introElement?.textContent).toBe("");
  });

  it("applique les classes de centrage lorsque 'center' est à true", async () => {
    const ResolvedComponent = await SectionHero({
      ...defaultProps,
      center: true,
    });
    render(ResolvedComponent);

    // Récupération de la div contenant le contenu (on cherche le parent du titre)
    const titleElement = screen.getByRole("heading", { level: 1 });
    const contentDiv = titleElement.parentElement;

    expect(contentDiv?.className).toContain("items-center");
    expect(contentDiv?.className).toContain("justify-center");
    expect(contentDiv?.className).toContain("mx-auto");
  });

  it("n'applique pas les classes de centrage par défaut", async () => {
    const ResolvedComponent = await SectionHero(defaultProps);
    render(ResolvedComponent);

    const titleElement = screen.getByRole("heading", { level: 1 });
    const contentDiv = titleElement.parentElement;

    expect(contentDiv?.className).not.toContain("items-center");
    expect(contentDiv?.className).not.toContain("justify-center");
    expect(contentDiv?.className).not.toContain("mx-auto");
  });
});
