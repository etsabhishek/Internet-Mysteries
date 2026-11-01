"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowDownRight, ArrowRight, BookOpen, Compass, Search, ShieldCheck, Sparkles } from "lucide-react";
import { cases, type CaseStatus } from "@/lib/cases";

const filters = ["All cases", "Unresolved", "Partially solved", "Disputed", "Explained", "Unverified", "Likely fiction"];

function StatusPill({ status, tone }: { status: CaseStatus; tone: string }) {
  return <span className={"pill pill-" + tone}>{status}</span>;
}

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All cases");

  const visibleCases = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return cases.filter((item) => {
      const matchesFilter = activeFilter === "All cases" || item.status === activeFilter;
      const haystack = [item.title, item.subtitle, item.summary, item.category, ...item.tags].join(" ").toLowerCase();
      return matchesFilter && (!normalized || haystack.includes(normalized));
    });
  }, [query, activeFilter]);

  const unresolvedCount = cases.filter((item) => item.status === "Unresolved").length;
  const activeCount = cases.filter((item) => !["Explained", "Likely fiction"].includes(item.status)).length;

  return (
    <div className="site-shell">
      <header className="topbar">
        <Link href="/" className="brand" aria-label="Internet Mysteries home">
          <span className="brand-mark">⌁</span>
          <span>internet<span>mysteries</span></span>
        </Link>
        <nav className="nav-links">
          <a href="#explore">Explore cases</a>
          <a href="#method">Our method</a>
          <a href="https://github.com/etsabhishek/Internet-Mysteries" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
        <div className="top-actions">
          <span className="status-live">Open archive</span>
          <a className="button button-primary" href="https://github.com/etsabhishek/Internet-Mysteries/issues/new" target="_blank" rel="noreferrer">Submit a lead <ArrowUpRightFallback /></a>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div>
            <div className="eyebrow">An open archive of the unexplained internet</div>
            <h1>Some things online are easier to <em>find</em> than explain.</h1>
            <p className="hero-copy">A community-powered investigation desk for strange websites, cryptic signals, lost media and digital folklore. Follow the evidence, compare theories and keep the unknown clearly labelled.</p>
            <div style={{ display: "flex", gap: 10, marginTop: 25, flexWrap: "wrap" }}>
              <a className="button button-primary" href="#explore">Explore the cases <ArrowRight size={14} /></a>
              <a className="button" href="#method">How investigations work <ArrowDownRight size={14} /></a>
            </div>
          </div>
          <aside className="hero-aside">
            <div className="aside-label">Field note / 001</div>
            <strong>Curiosity needs receipts.</strong>
            <p>We separate what can be verified from what people believe. Every case makes room for sources, uncertainty and unanswered questions.</p>
          </aside>
        </section>

        <div className="stats-row">
          <div className="stat"><strong>{cases.length.toString().padStart(2, "0")}</strong><span>case files</span></div>
          <div className="stat"><strong>{activeCount.toString().padStart(2, "0")}</strong><span>open or disputed</span></div>
          <div className="stat"><strong>{unresolvedCount.toString().padStart(2, "0")}</strong><span>unresolved</span></div>
          <div className="stat"><strong>01</strong><span>rule: evidence first</span></div>
        </div>

        <section className="explore-layout" id="explore">
          <div>
            <div className="section-head">
              <div><div className="section-kicker">The case archive / index 001—006</div><h2>Choose a rabbit hole.</h2></div>
              <span className="section-kicker">{visibleCases.length} results</span>
            </div>
            <div className="search-row">
              <label className="search-box">
                <Search size={16} />
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a mystery, clue, topic or technology..." aria-label="Search case files" />
              </label>
              <button className="button" onClick={() => { setQuery(""); setActiveFilter("All cases"); }}>Reset filters</button>
            </div>
            <div className="filter-row" aria-label="Filter cases by status">
              {filters.map((filter) => <button key={filter} className={"filter-chip" + (activeFilter === filter ? " active" : "")} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
            </div>
            <div className="case-grid">
              {visibleCases.map((item, index) => (
                <Link href={"/cases/" + item.slug} className="case-card" key={item.slug}>
                  <div className="card-meta"><span className="case-id">FILE / {String(index + 1).padStart(3, "0")}</span><StatusPill status={item.status} tone={item.statusTone} /></div>
                  <h3>{item.title}</h3>
                  <div className="subtitle">{item.subtitle}</div>
                  <p>{item.summary}</p>
                  <div className="card-footer"><span>{item.category} · {item.year}</span><span className="card-arrow">↗</span></div>
                </Link>
              ))}
              {visibleCases.length === 0 && <div className="empty-state">No case files match that search. Try another term or reset the filters.</div>}
            </div>
          </div>

          <aside className="sidebar">
            <div className="side-panel">
              <h3><Compass size={14} style={{ verticalAlign: "middle", marginRight: 7, color: "var(--accent)" }} />Investigation protocol</h3>
              <div className="principle"><b>01</b><span>Start with the original artifact, not a retelling.</span></div>
              <div className="principle"><b>02</b><span>Separate documented facts from theories.</span></div>
              <div className="principle"><b>03</b><span>Record what would change your mind.</span></div>
              <div className="principle"><b>04</b><span>Never identify private people or publish personal data.</span></div>
            </div>
            <div className="side-panel">
              <h3><BookOpen size={14} style={{ verticalAlign: "middle", marginRight: 7, color: "var(--accent)" }} />Case status</h3>
              <div className="side-line"><span>Unresolved</span><span>Evidence is incomplete</span></div>
              <div className="side-line"><span>Partially solved</span><span>Some answers confirmed</span></div>
              <div className="side-line"><span>Disputed</span><span>Competing explanations</span></div>
              <div className="side-line"><span>Explained</span><span>Strong accepted account</span></div>
            </div>
            <div className="side-panel" id="method">
              <h3><ShieldCheck size={14} style={{ verticalAlign: "middle", marginRight: 7, color: "var(--accent)" }} />Evidence over spectacle</h3>
              <p>This archive is a research starting point, not an authority. Case notes distinguish primary artifacts, reporting, community leads and speculation. Status labels are provisional and should change when better evidence appears.</p>
            </div>
            <div className="side-panel">
              <h3><Sparkles size={14} style={{ verticalAlign: "middle", marginRight: 7, color: "var(--accent)" }} />Have a lead?</h3>
              <p>Found an original file, a missing archive capture or a better source? Open a contribution issue and include the URL, capture date and what it supports.</p>
              <a className="text-link" href="https://github.com/etsabhishek/Internet-Mysteries/issues/new" target="_blank" rel="noreferrer" style={{ display: "inline-block", marginTop: 13, color: "var(--accent)", fontSize: 10 }}>Contribute on GitHub ↗</a>
            </div>
          </aside>
        </section>
      </main>

      <footer className="container footer">
        <span><strong>INTERNET MYSTERIES</strong> · An open archive for curious minds.</span>
        <span>Built for evidence, not easy answers. © {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

function ArrowUpRightFallback() {
  return <span aria-hidden="true">↗</span>;
}