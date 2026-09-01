import React from "react";

// Signature volontairement réduite aux props réellement utilisées dans
// le projet (voir src/components/feature/contact). Étends au besoin si
// d'autres props de @marsidev/react-turnstile sont consommées ailleurs.
interface TurnstileMockProps {
  siteKey?: string;
  onSuccess?: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
  className?: string;
}

export function Turnstile({ onSuccess, className }: TurnstileMockProps) {
  return (
    <button
      type="button"
      className={className}
      style={{
        border: "1px dashed currentColor",
        padding: "0.5rem 1rem",
        fontSize: "0.75rem",
        opacity: 0.7,
        cursor: "pointer",
      }}
      onClick={() => onSuccess?.("mock-turnstile-token")}
    >
      Turnstile mocké — cliquer pour simuler une vérification réussie
    </button>
  );
}

export default Turnstile;
