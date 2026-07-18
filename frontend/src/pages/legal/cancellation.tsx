import LegalPage from "../../components/legal-page";
import { business } from "../../data/business";

export default function CancellationPolicy() {
  return <LegalPage kicker="Travel terms" title="Cancellation Policy" intro="Cancellation terms vary by booking type, destination, package, and service provider.">
    <h2>Flights and hotels</h2><p>Cancellation fees depend on the airline or hotel policy. Non-refundable tickets cannot be refunded.</p>
    <h2>Visa applications</h2><p>Visa fees paid to embassies are non-refundable once an application has been submitted.</p>
    <h2>Tours and packages</h2><p>Cancellation terms vary with the destination and package type. The applicable terms are provided with every tour or package quote.</p>
    <h2>Study abroad</h2><p>School application fees are non-refundable.</p>
    <h2>How to cancel</h2><p>Send a detailed request with your booking reference to <a href={`mailto:${business.email}`}>{business.email}</a>. Refunds, where applicable, will be processed within 30 business days.</p>
  </LegalPage>;
}
