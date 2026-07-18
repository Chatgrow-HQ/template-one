import type { FormEvent } from "react";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PageHero from "../components/page-hero";
import { Scene } from "../components/motion-system";
import { business, services } from "../data/business";
import cruiseShip from "../assets/images/skyways/real-cruise-ship.jpg";

export default function Contact() {
  const preventSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();
  return <div className="site-page"><Navbar/><main>
    <PageHero kicker="Contact Skyways" title="A remarkable journey starts with hello." copy="Share your destination, dates, and travel needs. Our team will help you understand the next steps clearly." image={cruiseShip} imageAlt="Cruise ship at an international port"/>
    <section className="site-section"><div className="site-container contact-grid">
      <Scene><span className="site-kicker">Speak with our team</span><h2 className="site-heading">Let’s plan what comes next.</h2><p className="site-copy">Contact Skyways about flights, visas, hotels, insurance, tours, cruises, study abroad, school excursions, or a complete package.</p><div className="contact-list"><a className="contact-item" href={`mailto:${business.email}`}><span className="contact-item__icon"><FiMail/></span><span><strong>Email reservations</strong><small>{business.email}</small></span></a>{business.phones.map((phone,index)=><a className="contact-item" href={`tel:${business.phoneLinks[index]}`} key={phone}><span className="contact-item__icon"><FiPhone/></span><span><strong>Call our team</strong><small>{phone}</small></span></a>)}</div></Scene>
      <Scene delay={.12}><form className="site-form" onSubmit={preventSubmit}><span className="site-kicker">Travel enquiry</span><h2 className="site-heading">How can we help?</h2><div className="form-grid">
        <label className="form-field"><span>First name</span><input name="firstName" required placeholder="First name"/></label>
        <label className="form-field"><span>Last name</span><input name="lastName" required placeholder="Last name"/></label>
        <label className="form-field"><span>Email address</span><input name="email" type="email" required placeholder="you@example.com"/></label>
        <label className="form-field"><span>Mobile phone</span><input name="phone" type="tel" required placeholder="+234"/></label>
        <label className="form-field"><span>Service</span><select name="service">{services.map(item=><option key={item.title}>{item.title}</option>)}</select></label>
        <label className="form-field"><span>Destination</span><input name="destination" placeholder="Where would you like to go?"/></label>
        <label className="form-field form-field--full"><span>Tell us about the journey</span><textarea name="message" rows={5} placeholder="Dates, number of travellers, children’s ages, number of nights, and anything else we should know"/></label>
        <div className="form-field form-field--full"><button className="site-button" type="submit">Send enquiry <FiSend/></button></div>
      </div></form></Scene>
    </div></section>
  </main><Footer/></div>;
}
