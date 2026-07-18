import type { FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { FiArrowRight, FiCompass } from "react-icons/fi";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PageHero from "../components/page-hero";
import { Scene } from "../components/motion-system";
import cruiseCelebration from "../assets/images/skyways/real-cruise-celebration.jpg";

export default function Packages() {
  const [searchParams] = useSearchParams();
  const preventSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();
  return <div className="site-page"><Navbar/><main>
    <PageHero kicker="Holiday packages" title="Your holiday, designed around you." copy="Give us the essentials and let our team build a travel proposal that brings flights, stays, tours, and support into one clear plan." image={cruiseCelebration} imageAlt="A group enjoying a Skyways holiday" action={<a className="site-button" href="#proposal">Start my proposal <FiArrowRight/></a>}/>
    <section className="site-section site-section--soft" id="proposal"><div className="site-container proposal-grid">
      <Scene><span className="site-kicker">A few details</span><h2 className="site-display">Tell us the dream.<br/><em>We’ll shape the journey.</em></h2><p className="site-copy">Complete this proposal request with your destination, group size, children’s ages, and preferred number of nights. A Skyways specialist can then prepare relevant options.</p><div className="proposal-note"><FiCompass/><span><strong>Not sure where to go?</strong>Choose “Help me decide” and tell us the kind of experience you want.</span></div></Scene>
      <Scene delay={.12}><form className="site-form site-form--proposal" onSubmit={preventSubmit}><div className="form-grid">
        <label className="form-field"><span>First name</span><input required/></label><label className="form-field"><span>Last name</span><input required/></label>
        <label className="form-field"><span>Email address</span><input type="email" required/></label><label className="form-field"><span>Mobile phone</span><input type="tel" required/></label>
        <label className="form-field form-field--full"><span>Destination</span><input defaultValue={searchParams.get("destination") || ""} placeholder="A country, city, cruise—or Help me decide"/></label>
        <label className="form-field"><span>Number of people</span><input type="text" defaultValue={searchParams.get("travellers") || "1"}/></label><label className="form-field"><span>Preferred travel date</span><input type="date" defaultValue={searchParams.get("date") || ""}/></label>
        <label className="form-field form-field--full"><span>Travel type</span><input defaultValue={searchParams.get("type") || "Holiday"} readOnly/></label>
        <label className="form-field"><span>Number of nights</span><input type="number" min="1" defaultValue="5"/></label>
        <label className="form-field form-field--full"><span>Children’s ages, if applicable</span><input placeholder="For example: 6, 9, 14"/></label>
        <label className="form-field form-field--full"><span>Anything else?</span><textarea rows={4} placeholder="Preferred dates, departure city, interests, or special requirements"/></label>
        <div className="form-field form-field--full"><button className="site-button" type="submit">Request my proposal <FiArrowRight/></button></div>
      </div></form></Scene>
    </div></section>
  </main><Footer/></div>;
}
