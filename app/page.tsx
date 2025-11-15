export default function Page() {
  return (
    <main style={{
      minHeight: '100svh',
      display: 'grid',
      placeItems: 'center',
      padding: '2rem'
    }}>
      <article style={{
        maxWidth: 720,
        width: '100%',
        background: 'white',
        borderRadius: 16,
        padding: '2rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
      }}>
        <h1 style={{
          marginTop: 0,
          fontSize: 'clamp(1.75rem, 3vw, 2.25rem)'
        }}>
          What is meant by ?science?? 
        </h1>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
          <strong>Science</strong> is the systematic enterprise of observing the natural and
          social world, asking testable questions, and building reliable explanations
          and predictions by collecting evidence and reasoning with it. It relies on
          methods such as careful measurement, controlled experimentation, transparent
          reporting, peer review, and continual revision in light of new data.
        </p>
        <hr style={{ margin: '1.5rem 0', border: 0, borderTop: '1px solid #eee' }} />
        <h2 style={{ fontSize: '1.25rem' }}>Key ideas in one glance</h2>
        <ul style={{ lineHeight: 1.9 }}>
          <li><strong>Evidence-based</strong>: claims are grounded in observable data.</li>
          <li><strong>Testable</strong>: ideas can be checked and potentially falsified.</li>
          <li><strong>Repeatable</strong>: independent observers can reproduce results.</li>
          <li><strong>Provisional</strong>: conclusions can change with better evidence.</li>
        </ul>
        <h3 style={{ fontSize: '1.15rem' }}>Example</h3>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.75 }}>
          If a hypothesis says ?a substance boils at 100?C at sea level,? scientists
          can test this by measuring boiling points under controlled conditions. If
          repeated, independent measurements agree, confidence in the hypothesis grows;
          if not, the hypothesis is revised or rejected.
        </p>
      </article>
      <style>{`
        :root { color-scheme: light dark; }
        body { background: radial-gradient(1000px 600px at 10% -10%, #f7fbff, transparent), radial-gradient(1000px 600px at 110% 10%, #f6fff5, transparent), #fafafa; }
        @media (prefers-color-scheme: dark) {
          body { background: radial-gradient(1000px 600px at 10% -10%, #0b1220, transparent), radial-gradient(1000px 600px at 110% 10%, #091a0d, transparent), #0a0a0a; }
          article { background: #0f0f10; color: #e9e9ef; box-shadow: 0 10px 30px rgba(0,0,0,0.4); }
          hr { border-top-color: #222; }
        }
      `}</style>
    </main>
  );
}
