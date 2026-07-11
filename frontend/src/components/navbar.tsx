import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import logoDark from "../assets/images/logo-dark.png";
import logoLight from "../assets/images/logo-light.png";
import logoWhite from "../assets/images/logo-white.png";

const navigation = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact-us" },
];

type NavbarProps = {
  navclass: string;
  navlight: boolean;
  manuclass: string;
};

export default function Navbar({ navclass, navlight, manuclass }: NavbarProps) {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav id="topnav" className={`${navclass} ${scrolling ? "nav-sticky" : ""}`}>
      <div className="container relative">
        <Link className="logo" to="/" aria-label="Go to home page">
          {navlight ? (
            <>
              <span className="inline-block dark:hidden">
                <img src={logoDark} className="h-7 l-dark" alt="Travosy" />
                <img src={logoLight} className="h-7 l-light" alt="Travosy" />
              </span>
              <img src={logoWhite} className="hidden h-7 dark:inline-block" alt="Travosy" />
            </>
          ) : (
            <>
              <img src={logoDark} className="h-7 inline-block dark:hidden" alt="Travosy" />
              <img src={logoWhite} className="h-7 hidden dark:inline-block" alt="Travosy" />
            </>
          )}
        </Link>

        <div className="menu-extras">
          <div className="menu-item">
            <button
              type="button"
              className={`navbar-toggle ${isOpen ? "open" : ""}`}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
            >
              <div className="lines"><span /><span /><span /></div>
            </button>
          </div>
        </div>

        <div id="navigation" style={{ display: isOpen ? "block" : undefined }}>
          <ul className={`navigation-menu ${manuclass}`}>
            {navigation.map((item) => (
              <li
                key={item.to}
                className={location.pathname === item.to || (item.to === "/blog" && location.pathname.startsWith("/blog/")) ? "active" : ""}
              >
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) => isActive ? "active" : ""}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
