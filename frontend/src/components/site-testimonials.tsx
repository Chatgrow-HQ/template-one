import { motion, useReducedMotion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";

const testimonials = [
  { quote: "Skyways made the entire booking process clear and stress-free. We always knew what the next step was.", name: "Family traveller", trip: "International holiday" },
  { quote: "The group itinerary was organised thoughtfully and the team remained available whenever we needed support.", name: "Group coordinator", trip: "Educational tour" },
  { quote: "Professional advice, responsive communication, and travel arrangements that worked exactly as planned.", name: "Corporate client", trip: "Business travel" },
];

export default function SiteTestimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="site-section site-section--soft" aria-labelledby="testimonials-heading">
      <div className="site-container">
        <div className="section-head"><div><span className="site-kicker">Travellers love us</span><h2 id="testimonials-heading" className="site-heading">What our travellers say</h2></div></div>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <motion.article
              className="testimonial-card"
              key={item.name}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
            >
              <FiMessageCircle color="#155eef" />
              <blockquote>“{item.quote}”</blockquote>
              <div className="testimonial-card__person"><div className="testimonial-card__avatar">{item.name[0]}</div><div><strong>{item.name}</strong><div className="site-copy" style={{fontSize:13,lineHeight:1.4}}>{item.trip}</div><div className="testimonial-card__stars" aria-label="Five stars">★★★★★</div></div></div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
