import LegalPage from "../../components/legal-page";
import { business } from "../../data/business";

export default function Privacy() {
  return <LegalPage kicker="Legal" title="Privacy Policy" intro="At Skyways Travels and Tours, we respect your privacy and handle your information with care.">
    <h2>What we collect</h2><p>When you book with us, we may collect your name, email address, phone number, passport details, payment information, and travel preferences.</p>
    <h2>How we use your information</h2><p>We use your information to process bookings for flights, visas, hotels, tours, insurance, and study abroad services. We may also use it to send relevant updates and improve our services.</p>
    <h2>Data protection</h2><p>We do not sell your information. We share data only with airlines, embassies, hotels, and service partners when needed to complete your booking.</p>
    <h2>Your rights</h2><p>You can request to view, update, or delete your data at any time by emailing <a href={`mailto:${business.email}`}>{business.email}</a> or calling {business.phones.join(" or ")}.</p>
  </LegalPage>;
}
