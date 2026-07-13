import { Link } from "react-router-dom";
import { FiBriefcase, FiCompass, FiHome, FiMap, FiShield, FiUsers } from "react-icons/fi";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

const services = [
  {
    icon: FiCompass,
    title: "Tailor-Made Holidays",
    description: "Personal itineraries built around your travel style, preferred pace, dates, and budget.",
  },
  {
    icon: FiMap,
    title: "Guided Tours",
    description: "Handpicked group and private tours led by knowledgeable local guides.",
  },
  {
    icon: FiUsers,
    title: "Group Travel",
    description: "Smooth planning for family reunions, retreats, celebrations, and special-interest groups.",
  },
  {
    icon: FiHome,
    title: "Flights & Stays",
    description: "Convenient flight options and quality accommodation selected to suit your itinerary.",
  },
  {
    icon: FiBriefcase,
    title: "Corporate Travel",
    description: "Reliable business travel planning with flexible arrangements and responsive assistance.",
  },
  {
    icon: FiShield,
    title: "Travel Support",
    description: "Practical guidance and dedicated help before departure and throughout your trip.",
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
            <h2 className="md:text-3xl text-2xl font-semibold">Everything You Need to Travel Well</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mt-4">Whether you know exactly where you want to go or need a little inspiration, we turn ideas into carefully organised journeys.</p>
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
          <div className="mt-16 rounded-xl bg-slate-900 px-6 py-12 text-center md:px-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Have a destination in mind?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mt-4">Tell us where you would love to go, and our travel specialists will help shape an itinerary around you.</p>
            <Link to="/contact-us" className="mt-7 py-2.5 px-6 inline-block bg-primary text-white rounded-md font-medium">Start Planning Your Trip</Link>
          </div>
        </div>
      </main>
      <Footer />
      <Switcher />
    </>
  );
}
