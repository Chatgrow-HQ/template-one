import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, useReducedMotion } from "framer-motion";
import BrandMark from "./brand-mark";

const links = [
  ["Home", "/"], ["About", "/about-us"], ["Services", "/services"],
  ["Gallery", "/gallery"], ["FAQ", "/faq"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <motion.header className="site-nav" initial={reduceMotion ? false : { opacity: 0, y: -22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}>
      <div className="site-container site-nav__inner">
        <Link to="/" className="site-brand" aria-label="Skyways home"><BrandMark /></Link>
        <nav className={`site-nav__links ${open ? "open" : ""}`} aria-label="Primary navigation">
          {links.map(([label, to]) => <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)}>{label}</NavLink>)}
        </nav>
        <Link to="/contact-us" className="site-button site-nav__cta">Plan My Trip</Link>
        <button className="site-nav__toggle" type="button" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button>
      </div>
    </motion.header>
  );
}
