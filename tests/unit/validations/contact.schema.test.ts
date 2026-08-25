import { describe, it, expect } from "vitest";
import { getContactSchema } from "@/lib/validations/contact.schema";
import { _Translator, Messages } from "next-intl";

describe("contactSchema", async () => {
  // Mock de la fonction de traduction 't'
  const t = ((key: string, values?: Record<string, unknown>) => {
    if (values) {
      return `${key} (${JSON.stringify(values)})`;
    }
    return key;
  }) as _Translator<Messages, "Contact">;
  const contactSchema = getContactSchema(t);

  const validData = {
    lastName: "Dupont",
    firstName: "Jean",
    email: "jean@example.com",
    subject: "Demande de devis",
    message: "Bonjour, je souhaite un devis pour un site web vitrine.",
  };

  it("valide des données correctes", () => {
    const result = contactSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("rejette un email invalide", () => {
    const result = contactSchema.safeParse({
      ...validData,
      email: "pas-un-email",
    });
    expect(result.success).toBe(false);
  });

  it("rejette un message trop court", () => {
    const result = contactSchema.safeParse({
      ...validData,
      message: "Court",
    });
    expect(result.success).toBe(false);
  });

  it("rejette un nom vide", () => {
    const result = contactSchema.safeParse({
      ...validData,
      lastName: "",
    });
    expect(result.success).toBe(false);
  });

  it("accepte les champs optionnels absents", () => {
    const result = contactSchema.safeParse(validData);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.company).toBeUndefined();
      expect(result.data.job).toBeUndefined();
    }
  });

  it("trim les espaces et met l'email en lowercase", () => {
    const result = contactSchema.safeParse({
      ...validData,
      email: "  Jean@Example.COM  ",
      lastName: "  Dupont  ",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.email).toBe("jean@example.com");
      expect(result.data.lastName).toBe("dupont");
    }
  });
  it("accepte company et job vides (optionnels)", () => {
    const result = contactSchema.safeParse({
      ...validData,
      company: "",
      job: "",
    });
    expect(result.success).toBe(true);
  });
});
