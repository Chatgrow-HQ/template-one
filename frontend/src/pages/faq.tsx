import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PageHero from "../components/page-hero";
import { Scene } from "../components/motion-system";
import { faqs } from "../data/business";
import scienceGroup from "../assets/images/skyways/real-science-centre-group.jpg";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return <div className="site-page"><Navbar/><main>
    <PageHero kicker="Frequently asked questions" title="Clear answers before you travel." copy="Find quick answers about our IATA status, visa assistance, combined bookings, school excursions, and cancellation terms." image={scienceGroup} imageAlt="A Skyways educational travel group"/>
    <section className="site-section"><div className="site-container faq-layout"><Scene><span className="site-kicker">Good to know</span><h2 className="site-display">Questions are part<br/>of the <em>journey.</em></h2><p className="site-copy">If your question is not covered here, our reservations team will be happy to help.</p></Scene><Scene delay={.1} className="faq-list">{faqs.map(([question,answer],index)=><article className={`faq-item ${open===index?"open":""}`} key={question}><button type="button" onClick={()=>setOpen(open===index?-1:index)} aria-expanded={open===index}><span>{String(index+1).padStart(2,"0")}</span>{question}<FiChevronDown/></button><AnimatePresence initial={false}>{open===index&&<motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.35,ease:[.16,1,.3,1]}}><p>{answer}</p></motion.div>}</AnimatePresence></article>)}</Scene></div></section>
  </main><Footer/></div>;
}
