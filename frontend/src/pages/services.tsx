import { Link } from "react-router-dom";
import { FiCompass, FiMap, FiUsers } from "react-icons/fi";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

const services = [
  {
    icon: FiCompass,
    title: "Trip Planning",
    description: "Add your trip-planning service details, process, and customer benefits here.",
  },
  {
    icon: FiMap,
    title: "Curated Destinations",
    description: "Use this section to introduce the destinations or experiences your business offers.",
  },
  {
    icon: FiUsers,
    title: "Personal Support",
    description: "Explain how your team supports customers before, during, and after their journey.",
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
            <h2 className="md:text-3xl text-2xl font-semibold">What We Do</h2>
            <p className="text-slate-400 max-w-xl mx-auto mt-4">This page is ready for your final service content.</p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
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
        </div>
      </main>
      <Footer />
      <Switcher />
    </>
  );
}
