"use client";
const tags = ["Python","JavaScript","Go","ETL","Scraping","SQL","NoSQL","APIs"];
const tagColors: Record<string,string> = {
  Python: "var(--blue)", JavaScript: "var(--orange)", Go: "var(--pink)"
};

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh", padding: "100px 40px 60px",
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px",
      alignItems: "center", maxWidth: "1200px", margin: "0 auto",
      position: "relative", zIndex: 1
    }}>
      <div>
        <div style={{
          display: "inline-block", background: "var(--pink)",
          border: "var(--border)", padding: "4px 12px",
          fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const,
          letterSpacing: "2px", boxShadow: "var(--shadow)", marginBottom: "24px",
          animation: "pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) both"
        }}>
          📍 Malang, Indonesia · Open to Work
        </div>
        <h1 style={{
          fontFamily: "'Unbounded', sans-serif",
          fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 900,
          lineHeight: 1, letterSpacing: "-2px", marginBottom: "16px",
          animation: "slideUp 0.5s 0.1s both"
        }}>
          Moch Rozi<br />
          <span style={{ color: "var(--blue)" }}>Rizky</span><br />
          Priyanto
        </h1>
        <p style={{
          fontSize: "14px", lineHeight: 1.7, color: "#333",
          maxWidth: "440px", marginBottom: "32px",
          animation: "slideUp 0.5s 0.2s both"
        }}>
          Data Engineer building scalable pipelines, web scrapers, and API-driven backends.
          Automating the boring stuff so data just <em>flows</em>.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" as const, animation: "slideUp 0.5s 0.3s both" }}>
          <a href="#experience" className="btn btn-primary">View Work ↓</a>
          <a href="mailto:rozirizky94@gmail.com" className="btn btn-secondary">Get in Touch →</a>
          <a href="https://github.com/rozirizky/" target="_blank" className="btn btn-orange">GitHub ↗</a>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div style={{
          background: "var(--yellow)", border: "var(--border)", padding: "8px 12px",
          fontSize: "10px", fontWeight: 700, textTransform: "uppercase" as const,
          boxShadow: "var(--shadow)",
          position: "absolute", top: "-20px", right: "20px",
          animation: "float 3s ease-in-out infinite", zIndex: 2
        }}>🚀 Available Now</div>

        <div style={{
          background: "var(--cyan)", border: "var(--border)",
          boxShadow: "var(--shadow-lg)", padding: "32px", position: "relative"
        }}>
          <div style={{ position: "absolute", top: "-12px", right: "-12px", width: "100%", height: "100%", background: "var(--blue)", border: "var(--border)", zIndex: -1 }} />
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <div style={{ width: 10, height: 10, background: "var(--teal)", border: "2px solid var(--black)", borderRadius: "50%", animation: "pulse 1.5s infinite" }} />
            <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "1px" }}>Currently Active</span>
          </div>
          <div style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "12px", fontWeight: 700, marginBottom: "12px", textTransform: "uppercase" as const }}>Tech Stack</div>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px" }}>
            {tags.map(t => (
              <span key={t} style={{
                background: tagColors[t] || "#1a1a1a", color: "var(--white)",
                padding: "3px 8px", fontSize: "10px", fontWeight: 700, textTransform: "uppercase" as const
              }}>{t}</span>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "24px" }}>
            {[["1+","Years XP"],["4","Platforms"],["E2E","Pipelines"],["∞","Data"]].map(([num,label]) => (
              <div key={label} style={{ background: "var(--white)", border: "var(--border)", padding: "16px", boxShadow: "3px 3px 0 var(--black)" }}>
                <div style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "28px", fontWeight: 900, color: "var(--blue)", lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase" as const, marginTop: "4px", color: "#555" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          background: "var(--orange)", color: "white",
          border: "var(--border)", padding: "8px 12px",
          fontSize: "10px", fontWeight: 700, textTransform: "uppercase" as const,
          boxShadow: "var(--shadow)",
          position: "absolute", bottom: "-20px", left: "-10px",
          animation: "float 3s 1s ease-in-out infinite"
        }}>⚡ Data First</div>
      </div>

      <style>{`
        @keyframes pop { from { opacity:0; transform:scale(0.8) rotate(-3deg); } to { opacity:1; transform:scale(1) rotate(0deg); } }
        @keyframes slideUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes float { 0%,100% { transform:translateY(0) rotate(-3deg); } 50% { transform:translateY(-10px) rotate(-1deg); } }
        @keyframes pulse { 0%,100% { transform:scale(1); opacity:1; } 50% { transform:scale(1.3); opacity:0.7; } }
      `}</style>
    </section>
  );
}
