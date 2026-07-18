import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieNotice() {
  const [visible, setVisible] = useState(() => localStorage.getItem("skyways-cookie-choice") === null);
  const choose = (value: "accepted" | "essential") => {
    localStorage.setItem("skyways-cookie-choice", value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          className="cookie-notice"
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: 1.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Cookie preferences"
        >
          <strong>A smoother journey online.</strong>
          <p>We use cookies to improve performance, remember preferences, and understand site traffic. <Link to="/cookie-policy">Cookie policy</Link></p>
          <div><button type="button" onClick={() => choose("essential")}>Essential only</button><button className="cookie-notice__accept" type="button" onClick={() => choose("accepted")}>Accept cookies</button></div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
