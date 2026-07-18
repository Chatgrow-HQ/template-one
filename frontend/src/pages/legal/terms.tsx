import LegalPage from "../../components/legal-page";
import { business } from "../../data/business";

export default function Terms() {
  return <LegalPage kicker="Legal" title="Terms & Conditions" intro="By using our website and services, you agree to the terms below.">
    <h2>Services</h2><p>We act as a travel agent to arrange flights, visa support, hotels, insurance, tours, cruises, and study programmes.</p>
    <h2>Accuracy and availability</h2><p>Prices and availability are subject to change until reservations are finalised after payment is confirmed.</p>
    <h2>Customer responsibility</h2><p>You are responsible for ensuring that your passport, visas, and other travel documents are valid and accurate.</p>
    <h2>Third-party providers</h2><p>Skyways Travels and Tours is not liable for delays, cancellations, or issues caused by third-party providers such as airlines, hotels, or embassies.</p>
    <h2>Questions</h2><p>Contact us at <a href={`mailto:${business.email}`}>{business.email}</a>.</p>
  </LegalPage>;
}
