import type { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Scene } from "./motion-system";

export default function LegalPage({ kicker, title, intro, children }: { kicker: string; title: string; intro: string; children: ReactNode }) {
  return <div className="site-page"><Navbar/><main><section className="legal-hero"><div className="legal-hero__orb"/><div className="site-container"><Scene><span className="site-kicker">{kicker}</span><h1>{title}</h1><p>{intro}</p></Scene></div></section><section className="site-section"><Scene className="site-container legal-body">{children}</Scene></section></main><Footer/></div>;
}
