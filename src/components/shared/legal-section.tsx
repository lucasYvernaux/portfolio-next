interface LegalSectionProps {
  heading: string;
  body: string[];
}

export function LegalSection({ heading, body }: LegalSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="font-heading text-xl text-primary mb-3">{heading}</h2>
      {body.map((paragraph, i) => (
        <p key={i} className="text-gray-400 text-base leading-relaxed mb-3">
          {paragraph}
        </p>
      ))}
    </section>
  );
}
