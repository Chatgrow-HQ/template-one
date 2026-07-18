import type { ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.25 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

export function Scene({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.09 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
      }}
      whileHover={reduceMotion ? undefined : { y: -2, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-8, 28]);
  const scale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1.01, 1.04]);
  return <motion.img className={className} src={src} alt={alt} style={{ y, scale }} />;
}

export function FlightPath() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="flight-path" aria-hidden="true">
      <svg viewBox="0 0 720 220" fill="none">
        <motion.path
          d="M16 186C144 38 278 245 430 85C515 -5 594 30 704 18"
          pathLength="1"
          initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.28 }}
          transition={{ duration: 2.1, delay: 0.55, ease: "easeInOut" }}
        />
        <motion.g
          initial={reduceMotion ? false : { offsetDistance: "0%", opacity: 0 }}
          animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 5.5, delay: 0.65, ease: "easeInOut", repeat: Infinity, repeatDelay: 5 }}
          style={{ offsetPath: "path('M16 186C144 38 278 245 430 85C515 -5 594 30 704 18')" }}
        >
          <path d="M0 0l18-5-5 5 5 5L0 0z" fill="currentColor" />
        </motion.g>
      </svg>
    </div>
  );
}

export function RouteScene({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
