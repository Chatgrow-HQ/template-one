import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { FiNavigation } from "react-icons/fi";

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
              <span className="inline-block text-xl font-bold tracking-wide dark:hidden">
                <span className="l-dark"><span className="inline-flex items-center gap-2"><FiNavigation className="text-primary" /> Skyways</span></span>
                <span className="l-light"><span className="inline-flex items-center gap-2 text-white!"><FiNavigation className="text-primary" /> Skyways</span></span>
              </span>
              <span className="hidden items-center gap-2 text-xl font-bold text-white! dark:inline-flex"><FiNavigation className="text-primary" /> Skyways</span>
            </>
          ) : (
            <span className="inline-flex items-center gap-2 text-xl font-bold tracking-wide"><FiNavigation className="text-primary" /> Skyways</span>
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
