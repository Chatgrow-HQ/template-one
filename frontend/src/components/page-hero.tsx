import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FlightPath, ParallaxImage } from "./motion-system";

export default function PageHero({ kicker, title, copy, image, imageAlt, action }: { kicker: string; title: string; copy: string; image: string; imageAlt: string; action?: ReactNode }) {
  const reduceMotion = useReducedMotion();
  return (
    <section className="page-hero">
      <div className="page-hero__orb" aria-hidden="true" />
      <FlightPath />
      <div className="site-container page-hero__grid">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 42, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}>
          <span className="site-kicker">{kicker}</span><h1 className="site-title">{title}</h1><p className="site-copy">{copy}</p>{action && <div className="page-hero__action">{action}</div>}
        </motion.div>
        <motion.div className="page-hero__visual" initial={reduceMotion ? false : { opacity: 0, x: 54, rotate: 2 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 1, delay: reduceMotion ? 0 : 0.12, ease: [0.16, 1, 0.3, 1] }}>
          <ParallaxImage src={image} alt={imageAlt} /><span className="page-hero__stamp">EST.<strong>1994</strong></span>
        </motion.div>
      </div>
    </section>
  );
}
