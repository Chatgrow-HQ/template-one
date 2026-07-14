import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowRight, FiBriefcase, FiCalendar, FiCheckCircle, FiGlobe, FiHeadphones, FiMap, FiNavigation, FiShield, FiUsers } from "react-icons/fi";
import { motion, useReducedMotion } from "framer-motion";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import SiteTestimonials from "../../components/site-testimonials";
import { topDestination } from "../../data/data";
import cruiseShipImage from "../../assets/images/skyways/real-cruise-ship.jpg";
import cruisePortGroupImage from "../../assets/images/skyways/real-cruise-port-group.jpg";
import cruiseCelebrationImage from "../../assets/images/skyways/real-cruise-celebration.jpg";
import cruiseWhiteNightImage from "../../assets/images/skyways/real-cruise-white-night.jpg";
import studentMealImage from "../../assets/images/skyways/real-student-meal.jpg";
import scienceCentreGroupImage from "../../assets/images/skyways/real-science-centre-group.jpg";
import scienceCentreDinosaurImage from "../../assets/images/skyways/real-science-centre-dinosaur.jpg";

const benefits = [
  { icon: FiShield, title: "IATA accredited", text: "Professional ticketing support since 1997." },
  { icon: FiHeadphones, title: "Responsive support", text: "Real people available when you need help." },
  { icon: FiCalendar, title: "Flexible planning", text: "Travel options shaped around your needs." },
  { icon: FiCheckCircle, title: "30+ years' experience", text: "Serving travellers and organisations since 1994." },
];

const services = [
  { icon: FiNavigation, title: "Flight ticketing", text: "Domestic and international reservations across major airlines." },
  { icon: FiBriefcase, title: "Hotel reservations", text: "Hotels, resorts, apartments, transfers, and activities worldwide." },
  { icon: FiMap, title: "Tours and holidays", text: "Local and international packages for individuals and groups." },
  { icon: FiUsers, title: "Education through travel", text: "Purposeful international learning journeys for schools and students." },
  { icon: FiGlobe, title: "Corporate and group travel", text: "Organised travel for businesses, churches, and government bodies." },
  { icon: FiNavigation, title: "Travel support", text: "Insurance, car hire, meet-and-greet, and professional consultancy." },
];

const destinations = [
  { place: "Caribbean cruises", image: cruiseShipImage },
  { place: "Nassau, Bahamas", image: cruisePortGroupImage },
  { place: "Singapore", image: scienceCentreDinosaurImage },
  { place: "Group cruises", image: cruiseWhiteNightImage },
  { place: "Maldives", image: topDestination[0].image },
];

export default function Home() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const submitPlan = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); navigate("/contact-us"); };

  return (
    <div className="site-page">
      <Navbar />
      <main>
        <section className="hero">
          <motion.img className="hero__image" src={cruisePortGroupImage} alt="Skyways travellers enjoying a cruise stop in Nassau, Bahamas" initial={reduceMotion ? false : { opacity: 0, scale: 1.015 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} />
          <div className="site-container"><motion.div className="hero__content" initial={reduceMotion ? false : { opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.08, ease: "easeOut" }}>
            <h1>Go farther. <span>Travel better.</span></h1>
            <p>From the first flight search to the journey home, our Lagos team handles the details with over 30 years of travel experience.</p>
            <div className="hero__actions"><Link className="site-button" to="/contact-us">Plan my trip <FiArrowRight /></Link><Link className="site-button site-button--outline" to="/services">See what we arrange</Link></div>
            <div className="hero__proof"><span><FiCheckCircle /> IATA accredited</span><span>Established 1994</span></div>
          </motion.div></div>
        </section>

        <div className="site-container">
          <motion.form className="planner" onSubmit={submitPlan} aria-label="Start planning a trip" initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, ease: "easeOut" }}>
            <div className="planner__tabs"><span className="planner__tab planner__tab--active"><FiNavigation /> Flights</span><span className="planner__tab"><FiBriefcase /> Hotels</span><span className="planner__tab"><FiMap /> Tours</span><span className="planner__tab"><FiUsers /> Group travel</span></div>
            <div className="planner__fields">
              <div className="planner__field"><label htmlFor="from">From</label><input id="from" placeholder="Where from?" /></div>
              <div className="planner__field"><label htmlFor="to">To</label><input id="to" placeholder="Where to?" /></div>
              <div className="planner__field"><label htmlFor="when">Departure</label><select id="when"><option>Add dates</option><option>Within 3 months</option><option>3–6 months</option></select></div>
              <div className="planner__field"><label htmlFor="travellers">Travellers</label><select id="travellers"><option>1 traveller</option><option>2 travellers</option><option>Group</option></select></div>
              <button className="site-button" type="submit">Start planning</button>
            </div>
          </motion.form>
          <div className="benefits">{benefits.map(({icon:Icon,title,text}) => <div className="benefit" key={title}><div className="benefit__icon"><Icon /></div><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
        </div>

        <section className="site-section" aria-labelledby="destinations-heading"><div className="site-container">
          <div className="section-head"><div><span className="site-kicker">Popular destinations</span><h2 id="destinations-heading" className="site-heading">Explore places worth the journey</h2></div><Link className="site-link" to="/contact-us">Plan a destination <FiArrowRight /></Link></div>
          <div className="destination-grid">{destinations.map((item) => <Link to="/contact-us" className="destination-card" key={item.place}><img src={item.image} alt={item.place}/><div className="destination-card__label"><strong>{item.place}</strong><span>Ask us about this destination</span></div></Link>)}</div>
        </div></section>

        <section className="site-section site-section--soft" aria-labelledby="services-heading"><div className="site-container">
          <div className="section-head"><div><span className="site-kicker">Everything in one place</span><h2 id="services-heading" className="site-heading">Travel services made clear</h2><p className="site-copy" style={{maxWidth:620}}>Choose what you need, or let our team coordinate the full journey from the first booking to your return home.</p></div><Link className="site-link" to="/services">View all services <FiArrowRight /></Link></div>
          <div className="service-grid">{services.map(({icon:Icon,title,text}) => <article className="service-card" key={title}><div className="service-card__icon"><Icon /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div></section>

        <section className="site-section" aria-labelledby="experiences-heading"><div className="site-container">
          <div className="section-head"><div><span className="site-kicker">Travellers in action</span><h2 id="experiences-heading" className="site-heading">The kind of journeys we create</h2><p className="site-copy">Real trips organised for families, private groups, schools, and education-through-travel programmes.</p></div></div>
          <div className="experience-grid">
            <article className="experience-card experience-card--wide"><img src={cruiseWhiteNightImage} alt="Skyways group dressed for a white-night celebration aboard a cruise ship"/><div className="experience-card__body"><h3>Group cruise experiences</h3><p>Celebrating together at sea</p></div></article>
            <article className="experience-card experience-card--wide"><img src={cruiseCelebrationImage} alt="Skyways travellers gathered together aboard a cruise ship"/><div className="experience-card__body"><h3>Journeys for every generation</h3><p>Families, friends, and communities</p></div></article>
            <article className="experience-card"><img src={scienceCentreGroupImage} alt="Students visiting Science Centre Singapore with their group leaders"/><div className="experience-card__body"><h3>Education through travel</h3><p>Science Centre Singapore</p></div></article>
            <article className="experience-card"><img src={scienceCentreDinosaurImage} alt="Students and group leaders visiting a dinosaur exhibit at Science Centre Singapore"/><div className="experience-card__body"><h3>Learning beyond the classroom</h3><p>Interactive science experiences</p></div></article>
            <article className="experience-card"><img src={studentMealImage} alt="Students sharing a group meal during an educational trip"/><div className="experience-card__body"><h3>Well-supported student trips</h3><p>Shared meals and memorable moments</p></div></article>
          </div>
        </div></section>

        <section className="site-section"><div className="site-container"><div className="offer-band"><div><span className="site-kicker" style={{color:"#8fb5ff"}}>Plan with confidence</span><h2>One conversation. A complete travel plan.</h2><p>Tell us where you want to go and we will help with flights, stays, tours, and support.</p></div><Link className="site-button" to="/contact-us">Speak with a travel specialist <FiArrowRight /></Link></div></div></section>

        <SiteTestimonials />
      </main>
      <Footer />
    </div>
  );
}
