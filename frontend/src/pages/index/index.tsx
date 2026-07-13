import { Link } from "react-router-dom";

import Tagline from "../../components/tagline";
import Navbar from "../../components/navbar";
import Form from '../../components/form';
import TopDestinationOne from '../../components/top-destination-one';
import About from '../../components/about';
import Client from '../../components/client';
import Blogs from '../../components/blogs';
import Footer from '../../components/footer';
import Switcher from '../../components/switcher';

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
        <Tagline/>
        <Navbar navclass="defaultscroll is-sticky tagline-height" navlight={true} manuclass="justify-end! nav-light"/>
        <section className="relative md:pt-72 md:pb-60 py-36 table w-full items-center bg-[url('../../assets/images/bg/1.jpg')] bg-top bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-slate-900/40"></div>
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-7.5">
                    <div className="lg:col-span-9 md:col-span-10">
                        <h5 className="text-3xl font-dancing! text-white">Your journey starts here</h5>
                        <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Travel farther. <br/> Experience more.</h1>
                        <p className="text-white/70 text-xl max-w-xl">Thoughtfully planned holidays, handpicked stays, and local experiences—designed around your time, interests, and budget.</p>
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

        <section className="relative md:py-24 py-16 overflow-hidden">
            <TopDestinationOne/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h2 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Popular Tour Packages</h2>

                    <p className="text-slate-400 max-w-xl mx-auto">Start with one of our traveller favourites, then let us tailor the itinerary to make it completely yours.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {packages.slice(0,6).map((item:Package,index:number)=>{
                        return(
                            <div className="group rounded-md shadow-sm dark:shadow-gray-700" key={index}>
                                <div className="relative overflow-hidden rounded-t-md shadow-sm dark:shadow-gray-700 mx-3 mt-3">
                                    <img src={item.image} className="scale-125 group-hover:scale-100 duration-500" alt=""/>
                                    {item.tagText && (
                                        <div className="absolute top-0 inset-s-0 p-4">
                                            <span className="bg-primary text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{item.tagText}</span>
                                        </div>
                                    )}

                                    <div className="absolute top-0 inset-e-0 p-4">
                                        <Link to="#" className="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-full text-slate-100 dark:text-slate-700 focus:text-primary dark:focus:text-primary hover:text-primary dark:hover:text-primary"><i className="ri-heart-fill text-[20px] align-middle"></i></Link>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <p className="flex items-center text-slate-400 font-medium mb-2"><FiMapPin className="text-primary size-4 me-1"></FiMapPin> {item.place}</p>
                                    <Link to="/contact-us" className="text-lg font-medium hover:text-primary duration-500 ease-in-out">{item.title}</Link>

                                    <div className="flex items-center mt-2">
                                        <span className="text-slate-400">Rating:</span>
                                        <ul className="text-lg font-medium text-amber-400 list-none ms-2 space-x-1">
                                            <li className="inline"><i className="ri-star-s-fill align-middle"></i></li>
                                            <li className="inline"><i className="ri-star-s-fill align-middle"></i></li>
                                            <li className="inline"><i className="ri-star-s-fill align-middle"></i></li>
                                            <li className="inline"><i className="ri-star-s-fill align-middle"></i></li>
                                            <li className="inline"><i className="ri-star-s-fill align-middle"></i></li>
                                            <li className="inline text-slate-900 dark:text-white text-sm">5.0(30)</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="mt-4 pt-4 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                                        <h5 className="text-lg font-medium text-primary">$ 58 / Day</h5>

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

            <Client/>

            <Blogs/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}
