import { describe, it, expect, vi, beforeEach } from "vitest";

// vi.hoisted permet de déclarer des mocks réutilisables avant que vi.mock ne soit exécuté
const { mockSend } = vi.hoisted(() => ({
  mockSend: vi.fn().mockResolvedValue({ data: { id: "test-id" }, error: null }),
}));

// Mock de la classe Resend
vi.mock("resend", () => {
  return {
    Resend: class {
      emails = {
        send: mockSend,
      };
    },
  };
});

// Mock des env vars
vi.mock("@env", () => ({
  env: {
    RESEND_TO_EMAIL: "test@yopmail.com",
    RESEND_FROM_EMAIL: "Portfolio Test <noreply@example.com>",
  },
  serverEnv: {
    RESEND_API_KEY: "re_zerrzerzer",
  },
}));

describe("emailService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("envoie un email sans erreur", async () => {
    const { emailService } = await import("@/services/email.services");

    await expect(
      emailService.sendContactEmail({
        lastName: "Dupont",
        firstName: "Jean",
        email: "jean@example.com",
        subject: "Test",
        message: "Message de test suffisamment long pour passer la validation.",
      }),
    ).resolves.toBeUndefined();
  });
});
