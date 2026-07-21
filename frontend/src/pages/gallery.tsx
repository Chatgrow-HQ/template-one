import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiCamera, FiX } from "react-icons/fi";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Scene } from "../components/motion-system";
import olumoRock from "../assets/images/tours/abeokuta-olumo-rock-2007.png";
import greatWall from "../assets/images/tours/beijing-great-wall-2007.png";
import groupTour from "../assets/images/tours/international-group-tour-2007.png";
import culturalVisit from "../assets/images/tours/beijing-cultural-visit-2007.png";
import disneyWorld from "../assets/images/tours/orlando-disney-world-2007.png";
import desertSafari from "../assets/images/tours/dubai-desert-safari-2008.png";

const tours = [
  { src: olumoRock, title: "Olumo Rock", location: "Abeokuta", year: "2007", note: "A landmark learning adventure in the heart of Ogun State." },
  { src: greatWall, title: "The Great Wall", location: "Beijing", year: "2007", note: "Skyways travellers taking in one of the world's great landmarks." },
  { src: groupTour, title: "International Group Tour", location: "Beijing", year: "2007", note: "A shared cultural experience with students and travellers." },
  { src: culturalVisit, title: "Cultural Visit", location: "Beijing", year: "2007", note: "Exploring history, art, and heritage together." },
  { src: disneyWorld, title: "Disney World", location: "Orlando", year: "2007", note: "A joyful family tour filled with unforgettable moments." },
  { src: desertSafari, title: "Desert Safari", location: "Dubai", year: "2008", note: "An open-desert adventure with the Skyways travel family." },
];

const filters = ["All", "2007", "2008"];

export default function Gallery() {
  const reduceMotion = useReducedMotion();
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const visibleTours = useMemo(
    () => tours.filter((tour) => filter === "All" || tour.year === filter),
    [filter],
  );

  const showPrevious = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + visibleTours.length) % visibleTours.length);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % visibleTours.length);
  };

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <div className="site-page">
      <Navbar />
      <main>
        <section className="gallery-hero">
          <div className="gallery-hero__orb gallery-hero__orb--one" />
          <div className="gallery-hero__orb gallery-hero__orb--two" />
          <div className="site-container gallery-hero__inner">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 42 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="site-kicker">A living travel archive</span>
              <h1>Skyways Tours<br /><em>over the years.</em></h1>
              <p>
                From local heritage visits to journeys across Africa, Europe,
                the Middle East, and North America—every frame holds a story.
              </p>
            </motion.div>
            <motion.div
              className="gallery-hero__years"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9, rotate: 4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <FiCamera />
              <strong>2004—2026</strong>
              <span>More than two decades of shared discovery</span>
            </motion.div>
          </div>
          <div className="gallery-hero__ticker" aria-hidden="true">
            <motion.div animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}>
              {["Africa", "Europe", "Middle East", "North America", "Culture", "Learning", "Adventure", "Africa", "Europe", "Middle East", "North America", "Culture", "Learning", "Adventure"].map((item, index) => <span key={`${item}-${index}`}>{item}<i>✦</i></span>)}
            </motion.div>
          </div>
        </section>

        <section className="site-section gallery-section">
          <div className="site-container">
            <Scene className="gallery-intro">
              <div>
                <span className="site-kicker">Tours over the years</span>
                <h2 className="site-heading">Moments that moved with us.</h2>
              </div>
              <p className="site-copy">Browse a selection from the Skyways archive. Choose a year, then select any photograph to see it in full.</p>
            </Scene>
            <div className="gallery-filters" role="group" aria-label="Filter gallery by year">
              {filters.map((item) => (
                <button key={item} className={filter === item ? "active" : ""} type="button" aria-pressed={filter === item} onClick={() => { setFilter(item); setActiveIndex(null); }}>
                  {item === "All" ? "All tours" : item}
                </button>
              ))}
            </div>
            <motion.div className="tour-gallery" layout>
              <AnimatePresence mode="popLayout">
                {visibleTours.map((tour, index) => (
                  <motion.button
                    className={`tour-gallery__card tour-gallery__card--${index % 6}`}
                    key={`${tour.location}-${tour.title}`}
                    type="button"
                    layout
                    initial={reduceMotion ? false : { opacity: 0, y: 34, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={reduceMotion ? undefined : { opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.6, delay: reduceMotion ? 0 : index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={reduceMotion ? undefined : { y: -8, rotate: index % 2 ? 0.6 : -0.6 }}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`View ${tour.location} ${tour.year} — ${tour.title}`}
                  >
                    <img src={tour.src} alt={`${tour.location} ${tour.year} — ${tour.title}`} />
                    <span className="tour-gallery__shade" />
                    <span className="tour-gallery__year">{tour.year}</span>
                    <span className="tour-gallery__caption"><small>{tour.location}</small><strong>{tour.title}</strong></span>
                    <span className="tour-gallery__open"><FiArrowRight /></span>
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      <AnimatePresence>
        {activeIndex !== null && visibleTours[activeIndex] && (
          <motion.div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Tour photograph viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveIndex(null)}>
            <button className="gallery-lightbox__close" type="button" aria-label="Close photo viewer" onClick={() => setActiveIndex(null)}><FiX /></button>
            <button className="gallery-lightbox__nav gallery-lightbox__nav--prev" type="button" aria-label="Previous photograph" onClick={(event) => { event.stopPropagation(); showPrevious(); }}><FiArrowLeft /></button>
            <motion.figure key={visibleTours[activeIndex].src} initial={reduceMotion ? false : { opacity: 0, scale: 0.9, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }} onClick={(event) => event.stopPropagation()}>
              <img src={visibleTours[activeIndex].src} alt={`${visibleTours[activeIndex].location} ${visibleTours[activeIndex].year} — ${visibleTours[activeIndex].title}`} />
              <figcaption>
                <span>{visibleTours[activeIndex].location} · {visibleTours[activeIndex].year}</span>
                <strong>{visibleTours[activeIndex].title}</strong>
                <p>{visibleTours[activeIndex].note}</p>
              </figcaption>
            </motion.figure>
            <button className="gallery-lightbox__nav gallery-lightbox__nav--next" type="button" aria-label="Next photograph" onClick={(event) => { event.stopPropagation(); showNext(); }}><FiArrowRight /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
