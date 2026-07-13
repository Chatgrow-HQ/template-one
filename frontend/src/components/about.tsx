import { Link } from "react-router-dom";

import about from '../assets/images/about.jpg'
import map from '../assets/images/map-plane-big.png'

import { FiUsers, FiGlobe } from "react-icons/fi";

export default function About(){
    return(
        <div className="container relative md:mt-24 mt-16">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6 relative">
                <div className="md:col-span-5">
                    <div className="relative">
                        <img src={about} className="mx-auto rounded-3xl shadow-sm dark:shadow-gray-700 w-[90%]" alt=""/>
                        

                        <div className="absolute flex items-center bottom-16 md:-inset-s-10 -inset-s-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-56 m-3">
                            <div className="flex items-center justify-center h-16.25 min-w-16.25 bg-primary/5 text-primary text-center rounded-xl me-3">
                                <FiUsers className="size-6"></FiUsers>
                            </div>
                            <div className="flex-1">
                                <span className="text-slate-400">Established</span>
                                <p className="text-xl font-bold">1994</p>
                            </div>
                        </div>

                        <div className="absolute flex items-center top-16 md:-inset-e-10 -inset-e-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
                            <div className="flex items-center justify-center h-16.25 min-w-16.25 bg-primary/5 text-primary text-center rounded-xl me-3">
                                <FiGlobe className="size-6"></FiGlobe>
                            </div>
                            <div className="flex-1">
                                <span className="text-slate-400">IATA Accredited</span>
                                <p className="text-xl font-bold">Since 1997</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-7">
                    <div className="lg:ms-8">
                        <span className="text-primary font-semibold uppercase tracking-widest text-sm">A trusted Nigerian travel company</span>
                        <h2 className="mb-6 mt-3 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">International and domestic travel, handled with ease</h2>

                        <p className="text-slate-400 max-w-xl mb-6">Skyways Travels &amp; Tours Limited (RC 258233) has served travellers since 1994. As a NANTA member and IATA-accredited agent, we simplify itinerary planning, reservations, ticketing, tours, and group travel for individuals and organisations.</p>

                        <Link to="/about-us" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-primary text-white rounded-md">Meet Our Team <i className="ri-arrow-right-s-line ms-0.5"></i></Link>
                    </div>
                </div>

                <div className="absolute bottom-0 inset-s-1/3 -z-1">
                    <img src={map} className="lg:w-150 w-96" alt=""/>
                </div>
            </div>
        </div>
    )
}
