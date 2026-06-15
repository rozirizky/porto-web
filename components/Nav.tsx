"use client";
export default function Nav() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0,
      background: "var(--yellow)",
      borderBottom: "var(--border)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 32px", height: "60px",
      zIndex: 100, boxShadow: "0 3px 0 var(--black)"
    }}>
      <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: "14px" }}>
        Rozi Rizky
      </div>
      <div className="nav-links" style={{ display: "flex", gap: 0 }}>
        {["About", "Experience", "Skills", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              display: "block", padding: "8px 16px",
              border: "var(--border)", borderLeft: item === "About" ? "var(--border)" : "none",
              background: "var(--white)", fontFamily: "'Space Mono', monospace",
              fontSize: "11px", fontWeight: 700, textDecoration: "none",
              color: "var(--black)", textTransform: "uppercase" as const,
              transition: "background 0.15s"
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--cyan)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--white)")}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
