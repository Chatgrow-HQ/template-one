import { Link } from "react-router-dom";
import { FiBriefcase, FiCompass, FiHome, FiMap, FiShield, FiUsers } from "react-icons/fi";

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const services = [
  {
    icon: FiCompass,
    title: "Flight Reservations & Ticketing",
    description: "Domestic and international flight bookings with access to major airlines and practical itinerary support.",
  },
  {
    icon: FiHome,
    title: "Hotel Reservations",
    description: "Hotels, resorts, and self-catering accommodation in destinations across Nigeria and worldwide.",
  },
  {
    icon: FiMap,
    title: "Local & International Tours",
    description: "Scheduled and request-based tours to interesting destinations within Nigeria and around the world.",
  },
  {
    icon: FiUsers,
    title: "Education Through Travel",
    description: "Educational group tours for schools, with previous destinations across Africa, Europe, Asia, and America.",
  },
  {
    icon: FiBriefcase,
    title: "Group & Corporate Travel",
    description: "Organised travel for churches, schools, government parastatals, companies, and private organisations.",
  },
  {
    icon: FiShield,
    title: "Additional Travel Services",
    description: "Travel insurance, car hire, meet-and-greet assistance, transfers, attraction tickets, and consultancy.",
  },
];

export default function Services() {
  return (
    <>
      <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="justify-end! nav-light" />
      <section className="relative table w-full items-center py-36 bg-[url('../../assets/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/60 via-slate-900/80 to-slate-900" />
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h1 className="text-4xl leading-normal tracking-wider font-semibold text-white">Our Services</h1>
          </div>
        </div>
        <div className="absolute text-center z-10 bottom-5 inset-s-0 inset-e-0 mx-3">
          <Link to="/" className="uppercase text-[13px] font-bold text-white/50 hover:text-white">Home</Link>
          <span className="text-white/50 mx-2">/</span>
          <span className="uppercase text-[13px] font-bold text-white">Services</span>
        </div>
      </section>

      <main className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mb-12">
            <h2 className="md:text-3xl text-2xl font-semibold">Complete Travel Services, All in One Place</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mt-4">Skyways helps individuals, travel agents, schools, churches, government bodies, and corporate organisations travel with less stress.</p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {services.map(({ icon: Icon, title, description }) => (
              <article key={title} className="p-6 text-center rounded-md bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                <div className="size-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto">
                  <Icon className="size-7" />
                </div>
                <h2 className="text-xl font-semibold mt-6">{title}</h2>
                <p className="text-slate-400 mt-3">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-16 grid lg:grid-cols-12 grid-cols-1 gap-8 items-center rounded-xl border border-slate-100 bg-slate-50 px-6 py-10 md:px-10 dark:border-gray-800 dark:bg-slate-800/40">
            <div className="lg:col-span-8">
              <span className="text-primary font-semibold uppercase tracking-widest text-sm">For travel professionals</span>
              <h2 className="text-2xl md:text-3xl font-semibold mt-3">Are you a travel agent?</h2>
              <p className="text-slate-400 mt-3 max-w-2xl">Skyways provides 24-hour online service and access to competitive deals from specialist suppliers around the world.</p>
            </div>
            <div className="lg:col-span-4 lg:text-end">
              <Link to="/contact-us" className="py-2.5 px-6 inline-block border border-primary text-primary hover:bg-primary hover:text-white rounded-md font-medium duration-300">Register your interest</Link>
            </div>
          </div>
          <div className="mt-16 rounded-xl bg-slate-900 px-6 py-12 text-center md:px-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Have a destination in mind?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mt-4">Tell us where you would love to go, and our travel specialists will help shape an itinerary around you.</p>
            <Link to="/contact-us" className="mt-7 py-2.5 px-6 inline-block bg-primary text-white rounded-md font-medium">Start Planning Your Trip</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
