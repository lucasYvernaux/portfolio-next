// Injecte le CSS Calendly dans le <head> via le layout
export function CalendlyProvider() {
  return (
    <>
      <link
        rel="preload"
        href="https://assets.calendly.com/assets/external/widget.css"
        as="style"
      />
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />
    </>
  );
}
