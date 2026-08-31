import { serverEnv } from "@/env/server";

interface TurnstileVerifyResponse {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
}

export async function verifyTurnstileToken(
  token: string,
  ip?: string,
): Promise<boolean> {
  const secret = serverEnv.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY is missing in environment variables.");
    return false;
  }

  try {
    const formData = new FormData();
    formData.append("secret", secret);
    formData.append("response", token);
    if (ip) formData.append("remoteip", ip);

    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
      },
    );

    const outcome: TurnstileVerifyResponse = await res.json();
    return outcome.success;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  }
}
