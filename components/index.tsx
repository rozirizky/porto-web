// components/Ticker.tsx
export function Ticker() {
  const items = ["Web Scraping","Data Pipelines","ETL Workflows","API Development","Machine Learning","Backend Systems","Python · JS · Go","SQL & NoSQL"];
  const all = [...items, ...items];
  return (
    <div style={{ background: "var(--orange)", borderTop: "var(--border)", borderBottom: "var(--border)", padding: "12px 0", overflow: "hidden", position: "relative", zIndex: 1 }}>
      <div style={{ display: "flex", animation: "ticker 20s linear infinite", whiteSpace: "nowrap" as const }}>
        {all.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "16px", padding: "0 32px", fontFamily: "'Unbounded',sans-serif", fontSize: "13px", fontWeight: 700, color: "var(--white)", textTransform: "uppercase" as const }}>
            <span style={{ width: 8, height: 8, background: "var(--yellow)", borderRadius: "50%", display: "inline-block" }} />
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

// components/About.tsx
export function About() {
  const contacts = [
    { icon: "📧", label: "Email", value: "rozirizky94@gmail.com", href: "mailto:rozirizky94@gmail.com" },
    { icon: "📱", label: "Phone", value: "08979312997", href: "https://wa.me/628979312997" },
    { icon: "💼", label: "LinkedIn", value: "rozi-priyanto5753562a1", href: "https://linkedin.com/in/rozi-priyanto5753562a1" },
    { icon: "🐙", label: "GitHub", value: "github.com/rozirizky", href: "https://github.com/rozirizky/" },
  ];
  return (
    <section id="about" style={{ padding: "100px 40px", background: "var(--blue)", color: "var(--white)", borderTop: "var(--border)", borderBottom: "var(--border)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-header reveal">
          <div className="section-num" style={{ WebkitTextStrokeColor: "rgba(255,255,255,0.3)" }}>01</div>
          <h2 className="section-title" style={{ color: "var(--yellow)" }}>About Me</h2>
        </div>
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
          <p style={{ fontSize: "15px", lineHeight: 1.9, borderLeft: "4px solid var(--cyan)", paddingLeft: "20px" }}>
            Data Engineer with hands-on experience in web scraping, scalable data pipelines, and API development.
            I build end-to-end data workflows — from ingestion to storage — processing and transforming large-scale
            data for real-world applications.<br /><br />
            Strong focus on automation, system efficiency, and creating data infrastructure that actually scales.
          </p>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}>
            {contacts.map(c => (
              <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "12px", background: "rgba(255,255,255,0.08)", border: "2px solid rgba(255,255,255,0.2)", padding: "14px 16px", fontSize: "12px" }}>
                <div style={{ width: 36, height: 36, background: "var(--cyan)", color: "var(--black)", border: "2px solid rgba(255,255,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "18px" }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: "10px", color: "#aaa", textTransform: "uppercase" as const, letterSpacing: "1px", marginBottom: "2px" }}>{c.label}</div>
                  {c.href ? <a href={c.href} style={{ color: "var(--cyan)", fontWeight: 700, textDecoration: "none" }}>{c.value}</a> : <span style={{ color: "var(--cyan)", fontWeight: 700 }}>{c.value}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// components/Experience.tsx
const jobs = [
  {
    initials: "DE", color: "var(--yellow)", periodBg: "var(--teal)",
    role: "Data Engineer", company: "PT eBdesk Teknologi", period: "Nov 2025 – Jan 2026",
    bullets: [
      "Built end-to-end data pipelines from ingestion (scraping) to storage systems",
      "Performed ETL processes for structured and unstructured data",
      "Designed and optimized data workflows for performance and scalability",
    ]
  },
  {
    initials: "SO", color: "var(--cyan)", periodBg: "var(--pink)",
    role: "Scraper Operational", company: "PT eBdesk Teknologi", period: "Oct 2024 – Oct 2025",
    bullets: [
      "Developed and maintained web scraping for online news and social media (Instagram, Facebook, YouTube, Twitter)",
      "Automated data extraction pipelines to improve operational efficiency",
      "Monitored pipelines and ensured data availability and reliability",
      "Handled data cleaning, validation, and recovery for corrupted data",
      "Assisted in deploying data pipelines to production environments",
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" style={{ padding: "100px 40px", maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
      <div className="section-header reveal">
        <div className="section-num">02</div>
        <h2 className="section-title">Experience</h2>
      </div>
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", left: "24px", top: 0, bottom: 0, width: "3px", background: "var(--black)" }} />
        {jobs.map((job, i) => (
          <div key={i} className="reveal" style={{ display: "grid", gridTemplateColumns: "60px 1fr", marginBottom: "40px" }}>
            <div style={{ width: 48, height: 48, background: job.color, border: "var(--border)", boxShadow: "var(--shadow)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Unbounded',sans-serif", fontWeight: 900, fontSize: "14px", flexShrink: 0, zIndex: 1 }}>{job.initials}</div>
            <div style={{ background: "var(--white)", border: "var(--border)", boxShadow: "var(--shadow)", marginLeft: "16px" }}>
              <div style={{ padding: "20px 24px", borderBottom: "var(--border)", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px" }}>
                <div>
                  <div style={{ fontFamily: "'Unbounded',sans-serif", fontSize: "16px", fontWeight: 700 }}>{job.role}</div>
                  <div style={{ fontSize: "12px", marginTop: "4px", color: "#555", fontWeight: 700 }}>{job.company}</div>
                </div>
                <div style={{ background: job.periodBg, border: "var(--border)", padding: "4px 10px", fontSize: "10px", fontWeight: 700, textTransform: "uppercase" as const, whiteSpace: "nowrap" as const, flexShrink: 0, boxShadow: "2px 2px 0 var(--black)" }}>{job.period}</div>
              </div>
              <ul style={{ padding: "20px 24px", listStyle: "none" }}>
                {job.bullets.map((b, j) => (
                  <li key={j} style={{ fontSize: "13px", lineHeight: 1.7, padding: "6px 0", borderBottom: j < job.bullets.length-1 ? "1px dashed #ddd" : "none", display: "flex", gap: "10px" }}>
                    <span style={{ color: "var(--orange)", fontSize: "12px", flexShrink: 0, marginTop: "1px" }}>▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// components/Skills.tsx
const skills = [
  { icon: "🕷️", name: "Web Scraping", desc: "High-scale scraping of social media & news platforms with automation.", tags: ["Selenium","Playwright","BeautifulSoup"], accent: "var(--blue)" },
  { icon: "⚡", name: "API Development", desc: "Designing RESTful APIs and data service backends at scale.", tags: ["REST","FastAPI","Node.js"], accent: "var(--orange)" },
  { icon: "🤖", name: "Machine Learning", desc: "ML models for data processing workflows and automation tasks.", tags: ["Scikit-learn","Pandas","NumPy"], accent: "var(--pink)" },
  { icon: "🗄️", name: "Database SQL & NoSQL", desc: "Schema design, optimized queries, relational and document stores.", tags: ["PostgreSQL","MongoDB","Redis"], accent: "var(--teal)" },
  { icon: "🔄", name: "Data Processing & ETL", desc: "End-to-end pipelines — cleaning, transforming, validating data at scale.", tags: ["Airflow","Spark","Kafka"], accent: "var(--cyan)" },
  { icon: "🛠️", name: "Backend Development", desc: "Reliable backend systems from architecture to production deployment.", tags: ["Docker","Linux","Git"], accent: "var(--blue)" },
  { icon: "💻", name: "Languages", desc: "Multi-language — choosing the right tool for each job.", tags: ["Python","JavaScript","Go"], accent: null },
];

export function Skills() {
  return (
    <section id="skills" style={{ padding: "100px 40px", background: "var(--yellow)", borderTop: "var(--border)", borderBottom: "var(--border)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-header reveal">
          <div className="section-num">03</div>
          <h2 className="section-title">Skills</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px" }}>
          {skills.map((s, i) => (
            <div key={i} className="reveal" style={{ background: "var(--white)", border: "var(--border)", padding: "24px", boxShadow: "var(--shadow)", transition: "transform 0.15s, box-shadow 0.15s", cursor: "none" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translate(-4px,-4px)"; e.currentTarget.style.boxShadow = "9px 9px 0 var(--black)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "var(--shadow)"; }}>
              <div style={{ width: 48, height: 48, background: s.accent || "var(--black)", color: s.accent === "var(--cyan)" || s.accent === "var(--teal)" ? "var(--black)" : "var(--white)", border: "var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", marginBottom: "16px", boxShadow: "3px 3px 0 var(--black)" }}>{s.icon}</div>
              <div style={{ fontFamily: "'Unbounded',sans-serif", fontSize: "13px", fontWeight: 700, marginBottom: "8px" }}>{s.name}</div>
              <p style={{ fontSize: "12px", color: "#555", lineHeight: 1.7, marginTop: "8px" }}>{s.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px", marginTop: "12px" }}>
                {s.tags.map(t => (
                  <span key={t} style={{ background: i === 6 ? (t === "Python" ? "var(--blue)" : t === "JavaScript" ? "var(--orange)" : "var(--pink)") : "var(--black)", color: "var(--white)", padding: "3px 8px", fontSize: "10px", fontWeight: 700, textTransform: "uppercase" as const }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// components/Contact.tsx
const links = [
  { icon: "✉️", label: "Email", value: "rozirizky94@gmail.com", href: "mailto:rozirizky94@gmail.com", color: "var(--cyan)" },
  { icon: "💼", label: "LinkedIn", value: "rozi-priyanto5753562a1", href: "https://linkedin.com/in/rozi-priyanto5753562a1", color: "var(--teal)" },
  { icon: "🐙", label: "GitHub", value: "github.com/rozirizky", href: "https://github.com/rozirizky/", color: "var(--yellow)" },
  { icon: "📱", label: "Phone / WhatsApp", value: "08979312997", href: null, color: "var(--pink)" },
];

export function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 40px", background: "var(--black)", borderTop: "var(--border)", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-header reveal">
          <div className="section-num" style={{ WebkitTextStrokeColor: "rgba(255,255,255,0.15)" }}>05</div>
          <h2 className="section-title" style={{ color: "var(--cyan)" }}>Let&apos;s Talk</h2>
        </div>
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
          <div>
            <p style={{ color: "#aaa", fontSize: "13px", lineHeight: 1.9, marginTop: "16px", borderLeft: "3px solid var(--pink)", paddingLeft: "16px" }}>
              Open to new opportunities in data engineering, pipeline architecture, and backend development.
              Whether it&apos;s a full-time role or a contract project — let&apos;s build something that scales.
            </p>
            <a href="mailto:rozirizky94@gmail.com" className="btn btn-primary" style={{ marginTop: "32px", display: "inline-flex" }}>Send an Email ✉️</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}>
            {links.map(l => (
              <a key={l.label} href={l.href || "#"} target={l.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "16px", background: "rgba(255,255,255,0.04)", border: "2px solid rgba(255,255,255,0.1)", padding: "18px 20px", textDecoration: "none", color: "var(--white)", transition: "background 0.2s, border-color 0.2s, transform 0.15s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(27,237,202,0.08)"; e.currentTarget.style.borderColor = "var(--teal)"; e.currentTarget.style.transform = "translateX(6px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0, border: `2px solid ${l.color}` }}>{l.icon}</div>
                <div>
                  <div style={{ fontSize: "10px", textTransform: "uppercase" as const, letterSpacing: "1px", color: "#666", marginBottom: "2px" }}>{l.label}</div>
                  <div style={{ fontWeight: 700, color: "var(--cyan)", fontSize: "12px" }}>{l.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// components/Projects.tsx
const projects = [
  {
  num: "01",
  title: "Dashboard Monitoring Finance",
  desc: "Real-time financial dashboard that aggregates crypto, stocks, and forex market data alongside scraped news from multiple sources. Features a priority-based async news scheduler, APScheduler-driven market ingestion pipeline, and clean REST API layer backed by PostgreSQL.",
  tags: ["Python", "FastAPI", "PostgreSQL", "Kafka", "React", "MongoDB", "Scrape"],
  accent: "var(--blue)",
  statusColor: "var(--blue)",
  status: "Shipped",
  links: {
    github: "https://github.com/rozirizky/dashboard-monitoring",
    live: null,
  },
  highlights: ["Real-time market data", "Priority-based scheduler", "Async scraping pipeline"],
},
  {
  num: "02",
  title: "Online News Data Pipeline",
  desc: "End-to-end pipeline for scraping, cleaning, and storing online news data from multiple sources. Includes text normalization, noise removal, and structured storage to PostgreSQL and MongoDB — ready for NLP, trend analysis, and BI dashboard integration.",
  tags: ["Python", "PostgreSQL", "MongoDB", "Scrapy", "NLP"],
  accent: "var(--orange)",
  statusColor: "var(--orange)",
  status: "Shipped",
  links: {
    github: "https://github.com/rozirizky/online-news-data-pipeline",
    live: null,
  },
  highlights: ["Multi-source scraping", "Text cleaning pipeline", "SQL + NoSQL storage"],
},
{
num: "03",
title: "SEO Content Automation",
desc: "AI-powered automation pipeline that scrapes Google SERP data, analyzes search intent, generates SEO-optimized long-form articles, enriches content with images and CTA injection, then auto-publishes directly to Blogger with scoring and self-improvement workflows.",
tags: ["Python", "FastAPI", "MongoDB", "Blogger API", "AI Automation"],
accent: "var(--pink)",
statusColor: "var(--pink)",
status: "AI Powered",
links: { github: "https://github.com/rozirizky/seo-content-automation", live: null },
highlights: ["SERP analysis", "Auto publish", "SEO scoring"],
},
  {
  num: "04",
  title: "Walknesia",
  desc: "Web platform for discovering and booking Indonesian travel packages, featuring integrated Midtrans payment gateway, auto-generated URL slugs for destinations, and a modern Vite-powered frontend.",
  tags: ["Laravel", "PHP", "MySQL", "Midtrans", "Vite", "SCSS"],
  accent: "var(--cyan)",
  statusColor: "var(--cyan)",
  status: "Live",
  links: { github: "https://github.com/rozirizky/walknesia", live: null },
  highlights: ["Tour Booking", "Payment Gateway", "REST API"],
},
];

export function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "100px 40px",
        background: "var(--white)",
        borderTop: "var(--border)",
        borderBottom: "var(--border)",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* subtle dot bg */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div className="section-header reveal">
          <div className="section-num">04</div>
          <h2 className="section-title">Projects</h2>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(520px, 1fr))", gap: "28px" }}>
          {projects.map((p, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                background: "var(--white)",
                border: "var(--border)",
                boxShadow: "var(--shadow-lg)",
                overflow: "hidden",
                transition: "transform 0.15s, box-shadow 0.15s",
                cursor: "none",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translate(-4px,-4px)";
                e.currentTarget.style.boxShadow = "12px 12px 0 var(--black)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
              }}
            >
              {/* Colored top bar */}
              <div style={{ height: "6px", background: p.accent }} />

              {/* Card header */}
              <div style={{
                padding: "24px 28px 20px",
                borderBottom: "var(--border)",
                display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{
                    fontFamily: "'Unbounded',sans-serif",
                    fontSize: "32px", fontWeight: 900,
                    color: "transparent",
                    WebkitTextStroke: `2px ${p.accent}`,
                    lineHeight: 1, flexShrink: 0,
                  }}>{p.num}</div>
                  <div>
                    <div style={{ fontFamily: "'Unbounded',sans-serif", fontSize: "15px", fontWeight: 700, lineHeight: 1.2 }}>{p.title}</div>
                  </div>
                </div>
                <div style={{
                  background: p.statusColor, color: p.statusColor === "var(--blue)" || p.statusColor === "var(--pink)" ? "var(--white)" : "var(--black)",
                  border: "var(--border)", padding: "4px 10px",
                  fontSize: "9px", fontWeight: 700, textTransform: "uppercase" as const,
                  letterSpacing: "1px", whiteSpace: "nowrap" as const, flexShrink: 0,
                  boxShadow: "2px 2px 0 var(--black)",
                }}>{p.status}</div>
              </div>

              {/* Body */}
              <div style={{ padding: "20px 28px" }}>
                <p style={{ fontSize: "13px", lineHeight: 1.8, color: "#444", marginBottom: "20px" }}>{p.desc}</p>

                {/* Highlights */}
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" as const, marginBottom: "20px" }}>
                  {p.highlights.map(h => (
                    <div key={h} style={{
                      display: "flex", alignItems: "center", gap: "6px",
                      background: "var(--black)", color: "var(--white)",
                      padding: "5px 10px", fontSize: "10px", fontWeight: 700, textTransform: "uppercase" as const,
                    }}>
                      <span style={{ width: 6, height: 6, background: p.accent, display: "inline-block", flexShrink: 0 }} />
                      {h}
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px", marginBottom: "24px" }}>
                  {p.tags.map(t => (
                    <span key={t} style={{
                      background: "transparent", color: "var(--black)",
                      border: "2px solid var(--black)",
                      padding: "3px 8px", fontSize: "10px", fontWeight: 700, textTransform: "uppercase" as const,
                    }}>{t}</span>
                  ))}
                </div>

                {/* Action links */}
                <div style={{ display: "flex", gap: "10px", borderTop: "2px dashed #ddd", paddingTop: "20px" }}>
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "6px",
                      padding: "8px 16px", border: "var(--border)",
                      background: "var(--black)", color: "var(--white)",
                      fontFamily: "'Space Mono',monospace", fontSize: "10px", fontWeight: 700,
                      textTransform: "uppercase" as const, textDecoration: "none",
                      boxShadow: "var(--shadow)", transition: "transform 0.1s, box-shadow 0.1s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "7px 7px 0 var(--black)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "var(--shadow)"; }}
                  >
                    🐙 GitHub ↗
                  </a>
                  {p.links.live ? (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        padding: "8px 16px", border: "var(--border)",
                        background: p.accent, color: p.accent === "var(--blue)" ? "var(--white)" : "var(--black)",
                        fontFamily: "'Space Mono',monospace", fontSize: "10px", fontWeight: 700,
                        textTransform: "uppercase" as const, textDecoration: "none",
                        boxShadow: "var(--shadow)", transition: "transform 0.1s, box-shadow 0.1s",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.transform = "translate(-2px,-2px)"; e.currentTarget.style.boxShadow = "7px 7px 0 var(--black)"; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "var(--shadow)"; }}
                    >
                      ⚡ Live Demo ↗
                    </a>
                  ) : (
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: "6px",
                      padding: "8px 16px", border: "2px dashed #ccc",
                      color: "#999", fontFamily: "'Space Mono',monospace",
                      fontSize: "10px", fontWeight: 700, textTransform: "uppercase" as const,
                    }}>
                      🔒 Private Repo
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal" style={{ marginTop: "48px", display: "flex", justifyContent: "center" }}>
          <a
            href="https://github.com/rozirizky/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ fontSize: "13px", padding: "14px 32px" }}
          >
            View All on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}

// components/Footer.tsx
export function Footer() {
  return (
    <footer style={{ background: "var(--black)", borderTop: "3px solid #222", padding: "24px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", color: "#555", fontSize: "11px" }}>
      <span style={{ color: "var(--yellow)", fontFamily: "'Space Mono',monospace", fontWeight: 700 }}>MOCH ROZI RIZKY PRIYANTO</span>
      <div>Built with ❤️ · <span style={{ color: "var(--yellow)" }}>Neo Brutalist</span> Portfolio · Malang, Indonesia</div>
    </footer>
  );
}
