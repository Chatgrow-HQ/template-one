import { Link } from "react-router-dom";
import { FiArrowRight, FiCompass, FiHeart, FiMap, FiShield, FiStar, FiUsers } from "react-icons/fi";

import journey1 from "../assets/images/listing/7.jpg";
import journey2 from "../assets/images/listing/8.jpg";
import journey3 from "../assets/images/listing/9.jpg";
import journey4 from "../assets/images/listing/10.jpg";
import journey5 from "../assets/images/listing/11.jpg";

const services = [
  { icon: FiCompass, title: "Flight ticketing", text: "Domestic and international reservations across major airlines." },
  { icon: FiMap, title: "Hotels & reservations", text: "Hotels, resorts, apartments, transfers, and activities worldwide." },
  { icon: FiUsers, title: "Group tours", text: "Travel for schools, churches, companies, government, and private groups." },
  { icon: FiShield, title: "Travel support", text: "Insurance, car hire, meet-and-greet, and professional consultancy." },
];

const gallery = [
  { image: journey1, title: "Private island escape", place: "The Maldives", className: "md:col-span-2 md:row-span-2 h-96 md:h-full" },
  { image: journey2, title: "Desert evenings", place: "Morocco", className: "h-64" },
  { image: journey3, title: "Coastal slow travel", place: "Southern Europe", className: "h-64" },
  { image: journey4, title: "Into the wild", place: "East Africa", className: "h-64" },
  { image: journey5, title: "City stories", place: "Paris", className: "h-64" },
];

export function TrustStrip() {
  return (
    <div className="container relative mt-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 rounded-xl border border-slate-100 bg-white shadow-sm dark:border-gray-800 dark:bg-slate-900 dark:shadow-gray-800">
        {[
          ["1994", "Established in Nigeria"],
          ["Since 1997", "IATA accredited"],
          ["NANTA", "Proud member"],
          ["NTDC", "Registered tour operator"],
        ].map(([value, label], index) => (
          <div key={label} className={`p-6 text-center ${index < 3 ? "lg:border-e lg:border-slate-100 lg:dark:border-gray-800" : ""}`}>
            <strong className="block text-2xl text-slate-900 dark:text-white">{value}</strong>
            <span className="mt-1 block text-sm text-slate-400">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ServicePreview() {
  return (
    <div className="container relative">
      <div className="grid lg:grid-cols-12 grid-cols-1 gap-8 items-end">
        <div className="lg:col-span-8">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">Travel made easier</span>
          <h2 className="mt-3 md:text-4xl text-3xl font-semibold leading-tight">From ticketing to touring,<br />we handle the details.</h2>
        </div>
        <div className="lg:col-span-4 lg:text-end">
          <Link to="/services" className="inline-flex items-center font-medium text-primary">Explore all services <FiArrowRight className="ms-2" /></Link>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
        {services.map(({ icon: Icon, title, text }) => (
          <article key={title} className="group p-6 rounded-xl border border-slate-100 bg-white hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-slate-900 duration-300">
            <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white duration-300"><Icon className="size-5" /></div>
            <h3 className="text-lg font-semibold mt-5">{title}</h3>
            <p className="text-slate-400 mt-2">{text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function TravelGallery() {
  return (
    <div className="container relative md:mt-24 mt-16">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-end mb-10">
        <div>
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">Travel possibilities</span>
          <h2 className="mt-3 md:text-4xl text-3xl font-semibold">Real places. Lasting memories.</h2>
        </div>
        <p className="text-slate-400 md:max-w-lg md:ms-auto">From educational tours and group journeys to relaxing holidays, Skyways connects travellers with memorable places in Nigeria and around the world.</p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 md:grid-rows-2 gap-4">
        {gallery.map((item) => (
          <figure key={item.title} className={`group relative overflow-hidden rounded-xl ${item.className}`}>
            <img src={item.image} alt={`${item.title} in ${item.place}`} className="h-full w-full object-cover group-hover:scale-105 duration-700" />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 p-5 text-white">
              <span className="text-xs uppercase tracking-widest text-white/70">{item.place}</span>
              <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function FinalCta() {
  return (
    <div className="container relative md:mt-24 mt-16">
      <div className="relative overflow-hidden rounded-2xl bg-slate-900 px-6 py-14 md:px-14 md:py-16">
        <div className="absolute -top-16 -right-16 size-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative grid lg:grid-cols-12 grid-cols-1 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 text-amber-400 mb-4"><FiStar fill="currentColor" /><FiStar fill="currentColor" /><FiStar fill="currentColor" /><FiStar fill="currentColor" /><FiStar fill="currentColor" /><span className="text-white/70 ms-2">Loved by travellers</span></div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Ready to make your travel plans easier?</h2>
            <p className="text-slate-300 mt-4 max-w-2xl">Speak with Skyways about flights, hotels, tours, group travel, or a complete itinerary tailored to your needs.</p>
          </div>
          <div className="lg:col-span-4 lg:text-end">
            <Link to="/contact-us" className="inline-flex items-center py-3 px-6 rounded-md bg-primary text-white font-medium">Plan my journey <FiHeart className="ms-2" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
