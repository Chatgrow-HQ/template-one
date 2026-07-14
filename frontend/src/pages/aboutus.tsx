import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PageHero from "../components/page-hero";
import SiteTestimonials from "../components/site-testimonials";
import moroccoImage from "../assets/images/skyways/group-morocco.webp";
import kenyaImage from "../assets/images/skyways/family-kenya.webp";

export default function AboutUs() {
  return <div className="site-page"><Navbar/><main>
    <PageHero kicker="About Skyways" title="Travel expertise built over three decades." copy="Skyways Travels & Tours Limited was registered in Nigeria in 1994. We help individuals and organisations travel locally and internationally with less stress and better support." image={moroccoImage} imageAlt="Skyways travel concept: guided group tour in Morocco" action={<Link className="site-button" to="/contact-us">Talk to our team <FiArrowRight/></Link>}/>

    <section className="site-section"><div className="site-container"><div className="credential-row">
      <div className="credential"><strong>1994</strong><span>Established in Nigeria</span></div><div className="credential"><strong>RC 258233</strong><span>Registered company</span></div><div className="credential"><strong>IATA</strong><span>Accredited since 1997</span></div><div className="credential"><strong>NANTA</strong><span>Professional member</span></div>
    </div></div></section>

    <section className="site-section site-section--soft"><div className="site-container split-grid"><img src={kenyaImage} alt="Family enjoying a guided safari journey in Kenya"/><div><span className="site-kicker">Our mission</span><h2 className="site-heading">Making travel easier from start to finish.</h2><p className="site-copy" style={{marginTop:20}}>Our mission is to help clients undertake domestic and international travel with complete ease—removing the usual stress from itinerary planning, group organisation, reservations, and ticketing.</p><div className="contact-list"><div className="contact-item"><div className="contact-item__icon"><FiCheckCircle/></div><div><strong>Professional planning</strong><p className="site-copy" style={{fontSize:14,margin:4}}>Clear options and practical advice for every journey.</p></div></div><div className="contact-item"><div className="contact-item__icon"><FiCheckCircle/></div><div><strong>Local understanding</strong><p className="site-copy" style={{fontSize:14,margin:4}}>A Nigerian team with international travel expertise.</p></div></div><div className="contact-item"><div className="contact-item__icon"><FiCheckCircle/></div><div><strong>Dependable support</strong><p className="site-copy" style={{fontSize:14,margin:4}}>Help before departure and throughout your trip.</p></div></div></div></div></div></section>

    <section className="site-section"><div className="site-container"><div className="section-head"><div><span className="site-kicker">Leadership</span><h2 className="site-heading">Experienced direction. Professional service.</h2></div></div><div className="service-grid service-grid--two"><article className="service-card"><span className="site-kicker">Chairman</span><h3>Mr. Tayo Soetan</h3><p>Founder and business leader with experience across finance, investment, leasing, car rental, and bureau de change services. He has served in senior credit and investment roles and on the boards of several companies.</p></article><article className="service-card"><span className="site-kicker">Managing Director</span><h3>Mrs. Kemi Soetan</h3><p>A chartered accountant and Fellow of ICAN with an MBA from the University of Texas at Austin. Her professional development includes airline ticketing, reservation systems, and tourism expertise.</p></article></div></div></section>
    <SiteTestimonials/>
  </main><Footer/></div>;
}
