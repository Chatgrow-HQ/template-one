import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck, FiCompass, FiNavigation, FiShield, FiUsers } from "react-icons/fi";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { FlightPath, ParallaxImage, Scene, Stagger, StaggerItem } from "../../components/motion-system";
import { services } from "../../data/business";
import cruisePort from "../../assets/images/skyways/real-cruise-port-group.jpg";
import cruiseWhite from "../../assets/images/skyways/real-cruise-white-night.jpg";
import cruiseCelebration from "../../assets/images/skyways/real-cruise-celebration.jpg";
import scienceGroup from "../../assets/images/skyways/real-science-centre-group.jpg";
import studentMeal from "../../assets/images/skyways/real-student-meal.jpg";

const audiences = ["Leisure", "Business", "Families", "Groups", "Study abroad", "Pilgrimages", "Cruises", "School excursions"];

export default function Home() {
  const reduceMotion = useReducedMotion();
  return <div className="site-page"><Navbar/><main>
    <section className="hero">
      <div className="hero__glow hero__glow--one"/><div className="hero__glow hero__glow--two"/><FlightPath/>
      <div className="site-container hero__grid">
        <motion.div className="hero__content" initial={reduceMotion ? false : {opacity:0,y:60,filter:"blur(14px)"}} animate={{opacity:1,y:0,filter:"blur(0px)"}} transition={{duration:1,ease:[.16,1,.3,1]}}>
          <span className="site-kicker">Trusted travel expertise since 1994</span>
          <h1>Travel with <span>experience.</span><br/>Travel with us.</h1>
          <p>From choosing a destination to arranging flights, visas, hotels, insurance, cruises, and complete packages, Skyways makes every journey simpler.</p>
          <div className="hero__actions"><Link className="site-button" to="/holiday-packages">Build my holiday <FiArrowRight/></Link><Link className="site-button site-button--outline" to="/services">Explore services</Link></div>
          <div className="hero__proof"><span><FiShield/> IATA licensed</span><span><FiCheck/> 30+ years in travel</span><span><FiUsers/> Individuals, families &amp; groups</span></div>
        </motion.div>
        <motion.div className="hero__visual" initial={reduceMotion ? false : {opacity:0,x:90,scale:.92}} animate={{opacity:1,x:0,scale:1}} transition={{duration:1.2,delay:.12,ease:[.16,1,.3,1]}}>
          <ParallaxImage src={cruisePort} alt="Skyways travellers together at a cruise destination"/>
          <motion.div className="hero__float-card"><strong>30+</strong><span>years creating<br/>memorable journeys</span></motion.div>
          <div className="hero__orbit" aria-hidden="true"><FiNavigation/></div>
        </motion.div>
      </div>
      <div className="service-marquee"><motion.div animate={reduceMotion ? undefined : {x:["0%","-50%"]}} transition={{duration:28,repeat:Infinity,ease:"linear"}}>{[...audiences,...audiences].map((item,index)=><span key={`${item}-${index}`}>{item}<i>✦</i></span>)}</motion.div></div>
    </section>

    <section className="site-section intro-section"><div className="site-container intro-grid">
      <Scene><span className="site-kicker">One team. Every detail.</span><h2 className="site-display">Your world is waiting.<br/><em>We make it reachable.</em></h2></Scene>
      <Scene delay={.12}><p className="site-copy">For over 30 years, Skyways Travels and Tours Limited has been a trusted name in travel. Our experienced team coordinates the details so you can focus on the reason for your journey.</p><Link className="site-link" to="/about-us">Discover our story <FiArrowRight/></Link></Scene>
    </div></section>

    <section className="site-section site-section--ink"><div className="site-container">
      <Scene className="section-head"><div><span className="site-kicker">How we can help</span><h2 className="site-heading">Nine services. One seamless journey.</h2></div><Link className="site-link site-link--light" to="/services">See every service <FiArrowRight/></Link></Scene>
      <Stagger className="service-grid">{services.slice(0,6).map(({icon:Icon,title,text},index)=><StaggerItem className="service-card service-card--dark" key={title}><span className="service-card__number">0{index+1}</span><div className="service-card__icon"><Icon/></div><h3>{title}</h3><p>{text}</p></StaggerItem>)}</Stagger>
    </div></section>

    <section className="site-section"><div className="site-container">
      <Scene className="section-head"><div><span className="site-kicker">Journeys with purpose</span><h2 className="site-heading">From the classroom to the open sea.</h2></div><p className="site-copy">Leisure escapes, educational trips, family holidays, cruises, and group adventures—planned with care.</p></Scene>
      <Stagger className="story-grid">
        <StaggerItem className="story-card story-card--tall"><img src={cruiseWhite} alt="Group celebrating during a Skyways cruise"/><div><span>Group cruises</span><h3>Celebrate together at sea.</h3></div></StaggerItem>
        <StaggerItem className="story-card"><img src={scienceGroup} alt="Students on an educational visit"/><div><span>School excursions</span><h3>Learning beyond the classroom.</h3></div></StaggerItem>
        <StaggerItem className="story-card"><img src={studentMeal} alt="Students sharing a meal on a group trip"/><div><span>Student travel</span><h3>Supported at every step.</h3></div></StaggerItem>
        <StaggerItem className="story-card story-card--wide"><img src={cruiseCelebration} alt="Families and friends travelling together"/><div><span>Families &amp; friends</span><h3>More people. More memories.</h3></div></StaggerItem>
      </Stagger>
    </div></section>

    <section className="site-section"><div className="site-container"><Scene className="mega-cta"><div><span className="site-kicker">Where to next?</span><h2>Let’s turn your travel idea into a complete plan.</h2><p>Tell us the destination, who is travelling, and how long you want to stay. We’ll help shape the rest.</p></div><Link className="site-button site-button--white" to="/holiday-packages">Request a proposal <FiCompass/></Link></Scene></div></section>
  </main><Footer/></div>;
}
