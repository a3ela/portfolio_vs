export default function Contact() {
  return (
    <div className="projects-section" style={{ minHeight: '50vh' }}>
      <h2 className="section-title">Let’s Talk</h2>
      <p style={{ fontSize: '1.5rem' }}>
        Send me an email at: <a href="mailto:your.email@example.com" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>your.email@example.com</a>
      </p>
    </div>
  );
}