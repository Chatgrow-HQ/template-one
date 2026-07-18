import LegalPage from "../../components/legal-page";

export default function BookingTerms() {
  return <LegalPage kicker="Travel terms" title="Booking Terms" intro="These points explain when a booking is confirmed and what is required from each traveller.">
    <h2>Confirmation</h2><p>A booking is ticketed or finalised only after full payment has been received.</p>
    <h2>Payments</h2><p>We accept payment by bank transfer or card.</p>
    <h2>Documents</h2><p>You must provide complete and accurate information for visa support, flights, insurance, and other travel services.</p>
    <h2>Changes</h2><p>Changes to bookings may attract fees from airlines, hotels, embassies, or other service providers.</p>
    <div className="legal-callout"><strong>Provider terms also apply.</strong><p>All bookings are subject to the terms of the individual service providers involved in your journey.</p></div>
  </LegalPage>;
}
