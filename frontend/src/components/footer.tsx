import { Link } from "react-router-dom";
import { FiNavigation } from "react-icons/fi";
import MotionReveal from "./motion-reveal";

export default function Footer() {
  return (
    <footer className="site-footer">
      <MotionReveal className="site-container site-footer__grid">
        <div>
          <Link to="/" className="site-brand"><FiNavigation /><span>Skyways<small>TRAVELS &amp; TOURS</small></span></Link>
          <p className="mt-4">Professional flight ticketing, hotel reservations, tours, and group travel support from Lagos, Nigeria.</p>
        </div>
        <div><h3>Company</h3><ul><li><Link to="/about-us">About us</Link></li><li><Link to="/services">Services</Link></li><li><Link to="/blog">Travel journal</Link></li></ul></div>
        <div><h3>Travel services</h3><ul><li><Link to="/services">Flight ticketing</Link></li><li><Link to="/services">Hotel reservations</Link></li><li><Link to="/services">Group tours</Link></li></ul></div>
        <div><h3>Contact</h3><p>Suite 24, Tafawa Balewa Square, Lagos</p><p><a href="tel:+2348037120276">0803 712 0276</a><br/><a href="mailto:skywaystravelsandtours@yahoo.com">skywaystravelsandtours@yahoo.com</a></p></div>
      </MotionReveal>
      <div className="site-footer__bottom"><div className="site-container">© {new Date().getFullYear()} Skyways Travels &amp; Tours Limited. All rights reserved.</div></div>
    </footer>
  );
}
