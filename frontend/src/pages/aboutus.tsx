import { FiCheckCircle } from "react-icons/fi";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PageHero from "../components/page-hero";
import { Scene, Stagger, StaggerItem } from "../components/motion-system";
import cruiseWhite from "../assets/images/skyways/real-cruise-white-night.jpg";
import cruiseCelebration from "../assets/images/skyways/real-cruise-celebration.jpg";

export default function AboutUs() {
  return (
    <div className="site-page">
      <Navbar />
      <main>
        <PageHero
          kicker="About Skyways"
          title="Three decades of making travel feel simple."
          copy="Founded in 1994, Skyways Travels and Tours has been shaping domestic and international travel experiences for more than 30 years."
          image={cruiseWhite}
          imageAlt="Skyways travellers on a group cruise"
        />
        <section className="site-section">
          <div className="site-container">
            <Stagger className="credential-row">
              <StaggerItem className="credential">
                <strong>1994</strong>
                <span>Founded in Nigeria</span>
              </StaggerItem>
              <StaggerItem className="credential">
                <strong>30+</strong>
                <span>Years in travel</span>
              </StaggerItem>
              <StaggerItem className="credential">
                <strong>IATA</strong>
                <span>Licensed travel agent</span>
              </StaggerItem>
              <StaggerItem className="credential">
                <strong>30+</strong>
                <span>Countries with visa support</span>
              </StaggerItem>
            </Stagger>
          </div>
        </section>
        <section className="site-section site-section--soft">
          <div className="site-container split-grid">
            <Scene className="split-grid__image">
              <img
                src={cruiseCelebration}
                alt="Families and groups travelling with Skyways"
              />
            </Scene>
            <Scene>
              <span className="site-kicker">Who we are</span>
              <h2 className="site-heading">
                Experience that travels with you.
              </h2>
              <p className="site-copy">
                As a licensed IATA Agent, Skyways Travels specialises in flight
                bookings, visa assistance, travel insurance, hotel reservations,
                cruises, tailor-made vacation packages, and much more.
              </p>
              <p className="site-copy">
                We have successfully organised hundreds of leisure and business
                journeys for individuals, families, and groups within Nigeria
                and internationally.
              </p>
              <div className="check-grid">
                {[
                  "Smooth, coordinated planning",
                  "Domestic and international expertise",
                  "Support for families and groups",
                  "Safe educational excursions",
                ].map((item) => (
                  <span key={item}>
                    <FiCheckCircle />
                    {item}
                  </span>
                ))}
              </div>
            </Scene>
          </div>
        </section>
        <section className="site-section">
          <div className="site-container intro-grid">
            <Scene>
              <span className="site-kicker">Our promise</span>
              <h2 className="site-display">
                Smooth. Safe.
                <br />
                <em>Memorable.</em>
              </h2>
            </Scene>
            <Scene delay={0.1}>
              <p className="site-copy">
                Whether you are planning to study abroad, embark on a school
                excursion, enjoy a family holiday, or travel for business, our
                team is dedicated to making the journey clear from the first
                conversation.
              </p>
            </Scene>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
