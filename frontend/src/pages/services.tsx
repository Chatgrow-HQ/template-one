import { Link } from "react-router-dom";
import { FiArrowRight, FiBriefcase, FiGlobe, FiHome, FiMap, FiNavigation, FiShield, FiUsers } from "react-icons/fi";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PageHero from "../components/page-hero";
import scienceCentreDinosaurImage from "../assets/images/skyways/real-science-centre-dinosaur.jpg";

const services = [
  { icon: FiNavigation, title: "Flight reservations & ticketing", text: "Domestic and international bookings across major airlines, with itinerary guidance and ticketing support." },
  { icon: FiHome, title: "Hotel reservations", text: "Hotels, resorts, self-catering apartments, transfers, and activities across global destinations." },
  { icon: FiMap, title: "Local & international tours", text: "Scheduled and request-based tours to interesting destinations within Nigeria and around the world." },
  { icon: FiUsers, title: "Education through travel", text: "Purposeful educational programmes for schools and students across Africa, Europe, Asia, and America." },
  { icon: FiBriefcase, title: "Corporate & group travel", text: "Organised travel for companies, churches, schools, government bodies, and private organisations." },
  { icon: FiShield, title: "Travel insurance", text: "Coverage options that help travellers prepare for unexpected events before and during a journey." },
  { icon: FiNavigation, title: "Car hire & transfers", text: "Airport transfers, car rental options, and meet-and-greet arrangements for smoother arrivals." },
  { icon: FiGlobe, title: "Travel consultancy", text: "Practical advice, itinerary planning, and coordinated support for simple or complex travel needs." },
];

export default function Services() { return <div className="site-page"><Navbar/><main>
  <PageHero kicker="Our services" title="Everything you need to travel well." copy="Book one service or let Skyways coordinate the complete journey. Every option is presented clearly, with a real team available to help." image={scienceCentreDinosaurImage} imageAlt="Students visiting an interactive dinosaur exhibit during a Skyways educational trip" action={<Link className="site-button" to="/contact-us">Request a travel plan <FiArrowRight/></Link>}/>
  <section className="site-section"><div className="site-container"><div className="section-head"><div><span className="site-kicker">Clear travel solutions</span><h2 className="site-heading">Choose the support you need</h2><p className="site-copy" style={{maxWidth:650}}>For individuals, travel agents, schools, churches, government bodies, corporate organisations, and private groups.</p></div></div><div className="service-grid">{services.map(({icon:Icon,title,text})=><article className="service-card" key={title}><div className="service-card__icon"><Icon/></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  <section className="site-section site-section--soft"><div className="site-container"><div className="section-head"><div><span className="site-kicker">How it works</span><h2 className="site-heading">A simple path from enquiry to departure</h2></div></div><div className="service-grid"><article className="service-card"><span className="site-kicker">01</span><h3>Tell us your plans</h3><p>Share the destination, travel dates, number of travellers, and the support you need.</p></article><article className="service-card"><span className="site-kicker">02</span><h3>Review your options</h3><p>We organise suitable choices clearly, so you can compare and decide with confidence.</p></article><article className="service-card"><span className="site-kicker">03</span><h3>Confirm and travel</h3><p>Once confirmed, we coordinate the arrangements and remain available for travel support.</p></article></div></div></section>
  <section className="site-section"><div className="site-container"><div className="offer-band"><div><span className="site-kicker" style={{color:"#8fb5ff"}}>For travel professionals</span><h2>Are you a travel agent?</h2><p>Ask about Skyways' online service and access to deals from specialist suppliers around the world.</p></div><Link className="site-button" to="/contact-us">Register your interest <FiArrowRight/></Link></div></div></section>
</main><Footer/></div>; }
