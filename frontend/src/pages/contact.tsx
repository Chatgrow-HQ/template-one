import type { FormEvent } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PageHero from "../components/page-hero";
import cruiseShipImage from "../assets/images/skyways/real-cruise-ship.jpg";

export default function Contact() {
  const preventSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();
  return <div className="site-page"><Navbar/><main>
    <PageHero kicker="Contact Skyways" title="Tell us where you want to go." copy="Share your destination, dates, and travel needs. A Skyways travel specialist will help you understand the next steps clearly." image={cruiseShipImage} imageAlt="Cruise ship docked at a Caribbean port"/>
    <section className="site-section"><div className="site-container contact-grid">
      <div><span className="site-kicker">Speak with our team</span><h2 className="site-heading">Start planning your journey</h2><p className="site-copy" style={{marginTop:18}}>Contact us about flight bookings, hotel reservations, tours, group travel, insurance, car hire, or complete itinerary support.</p><div className="contact-list">
        <div className="contact-item"><div className="contact-item__icon"><FiPhone/></div><div><strong>Call us</strong><p className="site-copy" style={{fontSize:14,margin:4}}><a href="tel:+2348037120276">0803 712 0276</a><br/>01-7939334 · 01-7619271</p></div></div>
        <div className="contact-item"><div className="contact-item__icon"><FiMail/></div><div><strong>Email</strong><p className="site-copy" style={{fontSize:14,margin:4}}><a href="mailto:skywaystravelsandtours@yahoo.com">skywaystravelsandtours@yahoo.com</a></p></div></div>
        <div className="contact-item"><div className="contact-item__icon"><FiMapPin/></div><div><strong>Visit our office</strong><p className="site-copy" style={{fontSize:14,margin:4}}>Suite 24, Tafawa Balewa Square, Lagos<br/>P.O. Box 53669, Falomo, Ikoyi, Lagos</p></div></div>
      </div></div>
      <form className="site-form" onSubmit={preventSubmit}><span className="site-kicker">Trip enquiry</span><h2 className="site-heading" style={{fontSize:28}}>How can we help?</h2><p className="site-copy" style={{fontSize:14}}>Complete the form and our team will respond with the right next step.</p><div className="form-grid" style={{marginTop:24}}>
        <div className="form-field"><label htmlFor="name">Full name</label><input id="name" name="name" placeholder="Your name" required/></div>
        <div className="form-field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" placeholder="you@example.com" required/></div>
        <div className="form-field"><label htmlFor="phone">Phone number</label><input id="phone" name="phone" placeholder="Your phone number"/></div>
        <div className="form-field"><label htmlFor="service">Service needed</label><select id="service"><option>Flight ticketing</option><option>Hotel reservation</option><option>Tour package</option><option>Group travel</option><option>Travel consultancy</option></select></div>
        <div className="form-field form-field--full"><label htmlFor="destination">Destination</label><input id="destination" name="destination" placeholder="Where would you like to go?"/></div>
        <div className="form-field form-field--full"><label htmlFor="message">Trip details</label><textarea id="message" name="message" rows={5} placeholder="Travel dates, number of travellers, budget, and anything else we should know"/></div>
        <div className="form-field form-field--full"><button className="site-button" type="submit">Send trip enquiry</button><p className="site-copy" style={{fontSize:12,marginTop:10}}>No obligation. Our team typically responds within one business day.</p></div>
      </div></form>
    </div></section>
  </main><Footer/></div>;
}
