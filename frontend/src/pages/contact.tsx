import { Link } from "react-router-dom";

import travel from '../assets/images/travel-train-station.svg'

import Navbar from "../components/navbar";
import Footer from "../components/footer";

import {FiPhone, FiMail,FiMapPin} from 'react-icons/fi'

export default function Contact(){
    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="justify-end! nav-light"/>
        <section className="relative table w-full items-center py-36 bg-[url('../../assets/images/bg/cta.jpg')] bg-center bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-linear-to-b from-slate-900/55 via-slate-900/75 to-slate-900"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center mt-10">
                    <span className="text-primary font-semibold uppercase tracking-widest text-sm">Start a conversation</span>
                    <h1 className="text-4xl md:text-5xl leading-normal font-semibold text-white mt-3">Where can we take you?</h1>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto mt-4">Share your ideas, dates, and travel style. We’ll help turn them into a journey designed around you.</p>
                </div>
            </div>
        </section>
        <section className="relative lg:py-24 py-16">
            <div className="container">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                    <div className="lg:col-span-7 md:col-span-6">
                        <img src={travel} className="w-full max-w-125 mx-auto" alt=""/>
                    </div>

                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="lg:ms-5">
                            <div className="bg-white dark:bg-slate-900 rounded-md shadow-sm dark:shadow-gray-800 p-6">
                                <h1 className="mb-2 text-2xl leading-normal font-semibold">Let’s Plan Your Next Trip</h1>
                                <p className="text-slate-400 mb-6">Share a few details and one of our travel specialists will get back to you.</p>

                                <form onSubmit={(event) => event.preventDefault()}>
                                    <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
                                        <div className="lg:col-span-6">
                                            <label htmlFor="name" className="font-semibold">Your Name:</label>
                                            <input name="name" id="name" type="text" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-sm outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Name :" required/>
                                        </div>
        
                                        <div className="lg:col-span-6">
                                            <label htmlFor="email" className="font-semibold">Your Email:</label>
                                            <input name="email" id="email" type="email" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-sm outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Email :" required/>
                                        </div>

                                        <div className="lg:col-span-12">
                                            <label htmlFor="subject" className="font-semibold">Where would you like to go?</label>
                                            <input name="subject" id="subject" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-sm outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Destination or trip type" required/>
                                        </div>
    
                                        <div className="lg:col-span-12">
                                            <label htmlFor="comments" className="font-semibold">Tell us about your trip:</label>
                                            <textarea name="comments" id="comments" className="mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-sm outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Travel dates, number of travellers, budget, and anything else we should know"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" id="submit" name="send" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-primary text-white rounded-md mt-2">Request a Travel Plan</button>
                                    <p className="text-xs text-slate-400 mt-3">Free initial consultation · No obligation · Usually replies within one business day</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                    <div className="text-center px-6">
                        <div className="relative text-transparent">
                            <div className="size-20 bg-primary/5 text-primary rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-xs dark:shadow-gray-800">
                                <FiPhone></FiPhone>
                            </div>
                        </div>

                        <div className="content mt-7">
                            <h5 className="h5 text-lg font-semibold">Phone</h5>
                            <p className="text-slate-400 mt-3">Speak directly with our team for trip ideas, bookings, and travel support.</p>
                            
                            <div className="mt-5">
                                <Link to="tel:+2348037120276" className="text-primary font-medium">0803 712 0276</Link>
                            </div>
                        </div>
                    </div>

                    <div className="text-center px-6">
                        <div className="relative text-transparent">
                            <div className="size-20 bg-primary/5 text-primary rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-xs dark:shadow-gray-800">
                                <FiMail></FiMail>
                            </div>
                        </div>

                        <div className="content mt-7">
                            <h5 className="h5 text-lg font-semibold">Email</h5>
                            <p className="text-slate-400 mt-3">Send your travel request anytime and we will respond as soon as possible.</p>
                            
                            <div className="mt-5">
                                <Link to="mailto:skywaystravelsandtours@yahoo.com" className="text-primary font-medium">skywaystravelsandtours@yahoo.com</Link>
                            </div>
                        </div>
                    </div>

                    <div className="text-center px-6">
                        <div className="relative text-transparent">
                            <div className="size-20 bg-primary/5 text-primary rounded-xl text-2xl flex align-middle justify-center items-center mx-auto shadow-xs dark:shadow-gray-800">
                                <FiMapPin></FiMapPin>
                            </div>
                        </div>

                        <div className="content mt-7">
                            <h5 className="h5 text-lg font-semibold">Location</h5>
                            <p className="text-slate-400 mt-3">Suite 24, Tafawa Balewa Square, Lagos<br/>P.O. Box 53669, Falomo, Ikoyi, Lagos</p>
                            
                            <div className="mt-5">
                                <Link to="https://www.google.com/maps/search/?api=1&query=Tafawa+Balewa+Square+Lagos" target="_blank" className="text-primary font-medium">View on Google Maps</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}
