import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import type { ContactFormData } from "@/lib/validations/contact.schema";

interface ContactEmailProps {
  data: ContactFormData;
}

export function ContactEmail({ data }: ContactEmailProps) {
  return (
    <Html lang="fr">
      <Head />
      <Preview>
        Nouveau message de {data.firstName + " " + data.lastName} —{" "}
        {data.subject}
      </Preview>
      <Body style={{ backgroundColor: "#f9f9f9", fontFamily: "sans-serif" }}>
        <Container
          style={{ maxWidth: "600px", margin: "0 auto", padding: "40px 20px" }}
        >
          <Heading
            style={{ color: "#111", fontSize: "24px", marginBottom: "8px" }}
          >
            Nouveau message de contact
          </Heading>
          <Text style={{ color: "#666", marginBottom: "32px" }}>
            Reçu depuis le formulaire de contact de votre portfolio.
          </Text>

          <Section
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              padding: "24px",
              border: "1px solid #e5e5e5",
            }}
          >
            <Text
              style={{
                margin: "0 0 4px",
                fontSize: "12px",
                color: "#888",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Nom
            </Text>
            <Text
              style={{ margin: "0 0 20px", fontSize: "15px", color: "#111" }}
            >
              {data.firstName + " " + data.lastName}
            </Text>

            <Text
              style={{
                margin: "0 0 4px",
                fontSize: "12px",
                color: "#888",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Entreprise
            </Text>
            <Text
              style={{ margin: "0 0 20px", fontSize: "15px", color: "#111" }}
            >
              {data.company} ({data.job})
            </Text>

            <Text
              style={{
                margin: "0 0 4px",
                fontSize: "12px",
                color: "#888",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Email
            </Text>
            <Text
              style={{ margin: "0 0 20px", fontSize: "15px", color: "#111" }}
            >
              {data.email}
            </Text>

            <Text
              style={{
                margin: "0 0 4px",
                fontSize: "12px",
                color: "#888",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Sujet
            </Text>
            <Text
              style={{ margin: "0 0 20px", fontSize: "15px", color: "#111" }}
            >
              {data.subject}
            </Text>

            <Hr style={{ borderColor: "#e5e5e5", margin: "20px 0" }} />

            <Text
              style={{
                margin: "0 0 4px",
                fontSize: "12px",
                color: "#888",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Message
            </Text>
            <Text
              style={{
                margin: 0,
                fontSize: "15px",
                color: "#111",
                whiteSpace: "pre-wrap",
                lineHeight: "1.6",
              }}
            >
              {data.message}
            </Text>
          </Section>

          <Text
            style={{
              color: "#aaa",
              fontSize: "12px",
              marginTop: "32px",
              textAlign: "center",
            }}
          >
            Yvernaux Web Solutions · Formulaire de contact
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
