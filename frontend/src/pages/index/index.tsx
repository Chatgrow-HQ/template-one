import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";
import Form from '../../components/form';
import TopDestinationOne from '../../components/top-destination-one';
import About from '../../components/about';
import Client from '../../components/client';
import Blogs from '../../components/blogs';
import Footer from '../../components/footer';
import { FinalCta, ServicePreview, TravelGallery, TrustStrip } from '../../components/home-conversion';

import { packages } from '../../data/data';

import {FiMapPin} from 'react-icons/fi'

interface Package{
    id: number;
    image: string;
    place: string;
    title: string;
    amount: string;
    tagText?: string;
}

export default function Index(){
    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="justify-end! nav-light"/>
        <section className="relative md:pt-48 md:pb-40 py-32 table w-full items-center bg-[url('../../assets/images/bg/1.jpg')] bg-top bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-slate-900/40"></div>
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-7.5">
                    <div className="lg:col-span-9 md:col-span-10">
                        <h5 className="text-3xl font-dancing! text-white">Welcome to Skyways</h5>
                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Travel with ease. <br/> Explore with confidence.</h1>
                        <p className="text-white/70 text-xl max-w-xl">Flights, hotel reservations, local and international tours, and complete travel support from an experienced Nigerian agency.</p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link to="/services" className="py-2.5 px-6 bg-primary text-white rounded-md font-medium">Explore Our Services</Link>
                            <Link to="/contact-us" className="py-2.5 px-6 border border-white text-white hover:bg-white hover:text-slate-900 rounded-md font-medium duration-500">Plan My Trip</Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <div className="container relative -mt-16 z-1">
            <Form/>
        </div>

        <TrustStrip/>

        <section className="relative md:py-24 py-16 overflow-hidden">
            <ServicePreview/>

            <TopDestinationOne/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <span className="text-primary font-semibold uppercase tracking-widest text-sm">Explore with Skyways</span>
                    <h2 className="mb-6 mt-3 md:text-4xl text-3xl md:leading-normal leading-normal font-semibold">Featured travel ideas</h2>

                    <p className="text-slate-400 max-w-xl mx-auto">A starting point for holidays, educational tours, and group travel. Contact us for current schedules and a personalised quotation.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {packages.slice(0,6).map((item:Package,index:number)=>{
                        return(
                            <div className="group rounded-md shadow-sm dark:shadow-gray-700" key={index}>
                                <div className="relative overflow-hidden rounded-t-md shadow-sm dark:shadow-gray-700 mx-3 mt-3">
                                    <img src={item.image} className="w-full h-64 object-cover scale-105 group-hover:scale-100 duration-500" alt={`${item.title} in ${item.place}`}/>
                                    {item.tagText && (
                                        <div className="absolute top-0 inset-s-0 p-4">
                                            <span className="bg-primary text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{item.tagText}</span>
                                        </div>
                                    )}

                                </div>

                                <div className="p-4">
                                    <p className="flex items-center text-slate-400 font-medium mb-2"><FiMapPin className="text-primary size-4 me-1"></FiMapPin> {item.place}</p>
                                    <Link to="/contact-us" className="text-lg font-medium hover:text-primary duration-500 ease-in-out">{item.title}</Link>

                                    <div className="flex items-center mt-2">
                                        <span className="text-slate-400">Custom itinerary</span>
                                        <ul className="text-lg font-medium text-amber-400 list-none ms-2 space-x-1">
                                            <li className="inline"><i className="ri-star-s-fill align-middle"></i></li>
                                            <li className="inline text-slate-900 dark:text-white text-sm">Skyways pick</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                                        <h5 className="text-lg font-medium text-primary">{item.amount}</h5>

                                        <Link to="/contact-us" className="text-slate-400 hover:text-primary">Enquire Now <i className="ri-arrow-right-s-line"></i></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-6 text-center">
                    <Link to="/services" className="text-slate-400 hover:text-primary inline-block">See All Travel Services <i className="ri-arrow-right-s-line"></i></Link>
                </div>
            </div>

            <About/>

            <TravelGallery/>

            <Client/>

            <FinalCta/>

            <Blogs/>
        </section>
        <Footer/>
        </>
    )
}
