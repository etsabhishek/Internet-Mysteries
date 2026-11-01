import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, FileSearch, GitBranch, HelpCircle, ShieldCheck } from "lucide-react";
import { cases, getCase } from "@/lib/cases";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  return { title: item?.title ?? "Case not found", description: item?.summary };
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();

  return (
    <div className="site-shell">
      <header className="topbar">
        <Link href="/" className="brand"><span className="brand-mark">⌁</span><span>internet<span>mysteries</span></span></Link>
        <nav className="nav-links"><Link href="/#explore">Explore cases</Link><Link href="/#method">Our method</Link><a href="https://github.com/etsabhishek/Internet-Mysteries" target="_blank" rel="noreferrer">GitHub ↗</a></nav>
        <span className="status-live">Open archive</span>
      </header>

      <main className="container">
        <section className="detail-hero">
          <div className="breadcrumb"><Link href="/">Archive</Link> / <span>{item.category}</span> / <span>{item.title}</span></div>
          <span className={"pill pill-" + item.statusTone}>{item.status}</span>
          <h1>{item.title}</h1>
          <div className="detail-subtitle">{item.subtitle}</div>
          <p className="detail-summary">{item.summary}</p>
          <div className="detail-meta"><span>CASE FILE · {item.year}</span><span>·</span><span>{item.readTime}</span><span>·</span><span>{item.category}</span></div>
        </section>

        <section className="detail-layout">
          <article>
            <div className="article-section">
              <h2>The question</h2>
              <p>{item.question}</p>
            </div>
            <div className="article-section">
              <h2>What we know</h2>
              <p>{item.overview}</p>
            </div>
            <div className="article-section">
              <h2><FileSearch size={17} style={{ verticalAlign: "middle", marginRight: 8, color: "var(--accent)" }} />Evidence locker</h2>
              <p>Sources are leads, not automatic proof. Open the original material where possible and record its provenance before relying on it.</p>
              {item.evidence.map((evidence) => (
                <div className="evidence-item" key={evidence.title}>
                  <span className="evidence-type">{evidence.type}</span>
                  <h3>{evidence.title}</h3>
                  <p>{evidence.detail}</p>
                  <a href={evidence.url} target="_blank" rel="noreferrer">Open source <ArrowUpRight size={12} style={{ verticalAlign: "middle" }} /></a>
                </div>
              ))}
            </div>
            <div className="article-section">
              <h2><GitBranch size={17} style={{ verticalAlign: "middle", marginRight: 8, color: "var(--accent)" }} />Competing theories</h2>
              <p>These are interpretations, not conclusions. Confidence labels describe the current state of the case file, not mathematical probabilities.</p>
              {item.theories.map((theory) => (
                <div className="theory-item" key={theory.title}>
                  <h3>{theory.title}</h3>
                  <p>{theory.detail}</p>
                  <span className="pill pill-slate">{theory.confidence}</span>
                </div>
              ))}
            </div>
            <div className="article-section">
              <h2>Timeline</h2>
              {item.timeline.map((event) => <div className="timeline-item" key={event.date}><time>{event.date}</time><p>{event.event}</p></div>)}
            </div>
            <div className="article-section">
              <h2><HelpCircle size={17} style={{ verticalAlign: "middle", marginRight: 8, color: "var(--accent)" }} />Still unanswered</h2>
              {item.openQuestions.map((question) => <div className="question-item" key={question}>{question}</div>)}
            </div>
          </article>

          <aside className="detail-side">
            <div className="side-panel">
              <h3><ShieldCheck size={14} style={{ verticalAlign: "middle", marginRight: 7, color: "var(--accent)" }} />Investigation status</h3>
              <span className={"pill pill-" + item.statusTone}>{item.status}</span>
              <p style={{ marginTop: 12 }}>This classification is provisional. A case should move when verifiable evidence changes what we can responsibly claim.</p>
            </div>
            <div className="side-panel">
              <h3>Case tags</h3>
              <div className="filter-row" style={{ marginBottom: 0 }}>{item.tags.map((tag) => <span className="filter-chip" key={tag}>{tag}</span>)}</div>
            </div>
            <div className="side-panel">
              <h3>Contribute evidence</h3>
              <p>Have an original source, correction or reproducible lead? Share it with the project maintainers.</p>
              <a className="button button-primary" style={{ width: "100%", marginTop: 14 }} href={"https://github.com/etsabhishek/Internet-Mysteries/issues/new?title=" + encodeURIComponent("Evidence contribution: " + item.title)} target="_blank" rel="noreferrer">Submit a lead <ArrowUpRight size={13} /></a>
            </div>
            <Link href="/" className="back-link"><ArrowLeft size={13} /> Back to all case files</Link>
          </aside>
        </section>
      </main>

      <footer className="container footer"><span><strong>INTERNET MYSTERIES</strong> · Follow the evidence.</span><span>© {new Date().getFullYear()}</span></footer>
    </div>
  );
}