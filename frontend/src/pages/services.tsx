import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PageHero from "../components/page-hero";
import { Scene, Stagger, StaggerItem } from "../components/motion-system";
import { services } from "../data/business";
import scienceImage from "../assets/images/skyways/real-science-centre-dinosaur.jpg";

export default function Services() {
  return (
    <div className="site-page">
      <Navbar />
      <main>
        <PageHero
          kicker="Our services"
          title="Every detail, handled."
          copy="Choose one service or let Skyways coordinate the full journey—from flights and visas to hotels, insurance, tours, cruises, and relocation support."
          image={scienceImage}
          imageAlt="Students enjoying an educational excursion"
        />
        <section className="site-section">
          <div className="site-container">
            <Scene className="section-head">
              <div>
                <span className="site-kicker">Travel solutions</span>
                <h2 className="site-heading">
                  Built around the way you want to travel.
                </h2>
              </div>
              <p className="site-copy">
                For leisure, business, family travel, groups, education,
                pilgrimages, cruises, and more.
              </p>
            </Scene>
            <Stagger className="service-grid service-grid--numbered">
              {services.map(({ icon: Icon, title, text }, index) => (
                <StaggerItem className="service-card" key={title}>
                  <span className="service-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="service-card__icon">
                    <Icon />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
        <section className="site-section site-section--soft">
          <div className="site-container">
            <Scene className="process">
              <div>
                <span>01</span>
                <h3>Share the idea</h3>
                <p>
                  Tell us where you want to go, who is travelling, and your
                  preferred dates.
                </p>
              </div>
              <div>
                <span>02</span>
                <h3>Shape the journey</h3>
                <p>
                  We coordinate suitable travel options and prepare a clear
                  proposal.
                </p>
              </div>
              <div>
                <span>03</span>
                <h3>Confirm the details</h3>
                <p>
                  Bookings are finalised after you review the terms and complete
                  payment.
                </p>
              </div>
              <div>
                <span>04</span>
                <h3>Travel confidently</h3>
                <p>
                  Set out with every key arrangement organised and documented.
                </p>
              </div>
            </Scene>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
