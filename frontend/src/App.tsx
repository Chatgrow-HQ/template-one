import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/index";
import AboutUs from "./pages/aboutus";
import Services from "./pages/services";
import ContactUs from "./pages/contact";
import Gallery from "./pages/gallery";
import Faq from "./pages/faq";
import Privacy from "./pages/legal/privacy";
import Terms from "./pages/legal/terms";
import CookiePolicy from "./pages/legal/cookies";
import BookingTerms from "./pages/legal/booking";
import CancellationPolicy from "./pages/legal/cancellation";
import ScrollToTop from "./components/scroll-to-top";
import CookieNotice from "./components/cookie-notice";
import { RouteScene, ScrollProgress } from "./components/motion-system";

export default function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <AnimatePresence mode="wait">
        <RouteScene key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/holiday-packages" element={<Navigate to="/gallery" replace />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/booking-terms" element={<BookingTerms />} />
            <Route path="/cancellation-policy" element={<CancellationPolicy />} />
            <Route path="/aboutus" element={<Navigate to="/about-us" replace />} />
            <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </RouteScene>
      </AnimatePresence>
      <CookieNotice />
    </>
  );
}
