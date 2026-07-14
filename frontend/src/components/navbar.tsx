import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiNavigation, FiX } from "react-icons/fi";
import { motion, useReducedMotion } from "framer-motion";

const links = [
  ["Home", "/"], ["About Us", "/about-us"], ["Services", "/services"], ["Blog", "/blog"], ["Contact", "/contact-us"],
];

export default function Navbar(_props?: { navclass?: string; navlight?: boolean; manuclass?: string }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <motion.header
      className="site-nav"
      initial={reduceMotion ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="site-container site-nav__inner">
        <Link to="/" className="site-brand" aria-label="Skyways home">
          <FiNavigation />
          <span>Skyways<small>TRAVELS &amp; TOURS</small></span>
        </Link>
        <nav className={`site-nav__links ${open ? "open" : ""}`} aria-label="Primary navigation">
          {links.map(([label, to]) => <NavLink key={to} to={to} end={to === "/"}>{label}</NavLink>)}
        </nav>
        <Link to="/contact-us" className="site-button site-nav__cta">Plan My Trip</Link>
        <button className="site-nav__toggle" type="button" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button>
      </div>
    </motion.header>
  );
}
