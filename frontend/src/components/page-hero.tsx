import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function PageHero({ kicker, title, copy, image, imageAlt, action }: { kicker: string; title: string; copy: string; image: string; imageAlt: string; action?: ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="page-hero">
      <div className="site-container page-hero__grid">
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: "easeOut" }}>
          <span className="site-kicker">{kicker}</span>
          <h1 className="site-title">{title}</h1>
          <p className="site-copy" style={{maxWidth:560,marginTop:20}}>{copy}</p>
          {action && <div style={{marginTop:28}}>{action}</div>}
        </motion.div>
        <motion.img src={image} alt={imageAlt} initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.08, ease: "easeOut" }} />
      </div>
    </section>
  );
}
