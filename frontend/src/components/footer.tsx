import { Link } from "react-router-dom";
import { FiArrowUpRight, FiMail, FiPhone } from "react-icons/fi";
import MotionReveal from "./motion-reveal";
import { business } from "../data/business";
import BrandMark from "./brand-mark";

export default function Footer() {
  return (
    <footer className="site-footer">
      <MotionReveal className="site-container site-footer__grid">
        <div>
          <Link to="/" className="site-brand"><BrandMark /><span>Skyways<small>TRAVELS &amp; TOURS</small></span></Link>
          <p>For more than 30 years, we have made domestic and international travel simpler for individuals, families, schools, and groups.</p>
        </div>
        <div><h3>Explore</h3><ul><li><Link to="/about-us">About us</Link></li><li><Link to="/services">Services</Link></li><li><Link to="/holiday-packages">Holiday packages</Link></li><li><Link to="/faq">FAQs</Link></li></ul></div>
        <div><h3>Legal</h3><ul><li><Link to="/privacy-policy">Privacy policy</Link></li><li><Link to="/terms-and-conditions">Terms &amp; conditions</Link></li><li><Link to="/cookie-policy">Cookie policy</Link></li><li><Link to="/booking-terms">Booking terms</Link></li><li><Link to="/cancellation-policy">Cancellation policy</Link></li></ul></div>
        <div><h3>Start a journey</h3><p><a className="footer-contact" href={`mailto:${business.email}`}><FiMail /> {business.email}</a><a className="footer-contact" href={`tel:${business.phoneLinks[0]}`}><FiPhone /> {business.phones[0]}</a><a className="footer-contact" href={`tel:${business.phoneLinks[1]}`}><FiPhone /> {business.phones[1]}</a></p><Link className="site-link" to="/contact-us">Contact us <FiArrowUpRight /></Link></div>
      </MotionReveal>
      <div className="site-footer__bottom"><div className="site-container">© {new Date().getFullYear()} Skyways Travels &amp; Tours Limited. All rights reserved.</div></div>
    </footer>
  );
}
