import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import about from '../assets/images/about.jpg'
import map from '../assets/images/map-plane-big.png'

import { FiUsers, FiGlobe } from "react-icons/fi";

export default function About(){

    // For Counter
    const [counts, setCounts] = useState([0, 0]);

    useEffect(() => {
        const starts = [0, 0];
        const ends = [4589, 50];

        const duration = 500;

        const increments = starts.map((start, i) => (ends[i] - start) / (duration / 16));

        let current = [...starts];

        const timer = setInterval(() => {
            let completed = true;

            current = current.map((value, i) => {
                value += increments[i];

                if (value < ends[i]) {
                    completed = false;
                    return value;
                } else {
                    return ends[i];
                }
            });

            setCounts(current.map(v => Math.floor(v)));

            if (completed) clearInterval(timer);

        }, 16);

        return () => clearInterval(timer);
    }, []);

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
                                <span className="text-slate-400">Happy Travellers</span>
                                <p className="text-xl font-bold">{counts[0]}</p>
                            </div>
                        </div>

                        <div className="absolute flex items-center top-16 md:-inset-e-10 -inset-e-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
                            <div className="flex items-center justify-center h-16.25 min-w-16.25 bg-primary/5 text-primary text-center rounded-xl me-3">
                                <FiGlobe className="size-6"></FiGlobe>
                            </div>
                            <div className="flex-1">
                                <span className="text-slate-400">Travel Packages</span>
                                <p className="text-xl font-bold">{counts[1]}+</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-7">
                    <div className="lg:ms-8">
                        <h2 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Travel planning made <br/> personal and effortless</h2>

                        <p className="text-slate-400 max-w-xl mb-6">We create memorable journeys for couples, families, groups, and solo travellers. From the first idea to the journey home, our specialists handle the details while you enjoy the anticipation—and the adventure.</p>

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
