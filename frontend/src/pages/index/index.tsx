import { useState } from 'react';
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

    const [isOpen, setOpen] = useState<boolean>(false);

    return(
        <>
        <Tagline/>
        <Navbar navclass="defaultscroll is-sticky tagline-height" navlight={true} manuclass="justify-end! nav-light"/>
        <section className="relative md:pt-72 md:pb-60 py-36 table w-full items-center bg-[url('../../assets/images/bg/1.jpg')] bg-top bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-slate-900/40"></div>
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-7.5">
                    <div className="lg:col-span-8 md:col-span-7 md:order-1 order-2">
                        <h5 className="text-3xl font-dancing! text-white">Beauty of Discover</h5>
                        <h4 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Let's Leave The Road, <br/> And Take The Travosy</h4>
                        <p className="text-white/70 text-xl max-w-xl">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                    </div>

                    <div className="lg:col-span-4 md:col-span-5 md:text-center md:order-2 order-1">
                        <Link to="#!" onClick={() => setOpen(true)} className="lightbox lg:h-24 h-20 lg:w-24 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white hover:bg-primary text-primary hover:text-white duration-500 ease-in-out mx-auto">
                            <i className="ri-play-fill inline-flex items-center justify-center text-3xl"></i>
                        </Link>
                    </div>
                    {isOpen && 
                        <div className="flex bg-[#00000099] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div className="relative p-1 w-full max-w-2xl max-h-full">
                                <div className="relative bg-white rounded-lg shadow-xs dark:bg-gray-700">
                                    <div className="flex items-center justify-between p-1 border-b rounded-t dark:border-gray-600 border-gray-200">
                                        <button type="button" onClick={()=>setOpen(!isOpen)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                    <div className="p-1 md:p-1 space-y-4">
                                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/yba7hPeTSjk?playlist=yba7hPeTSjk&loop=1"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        }
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
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Tours Packages</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
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
                                    <Link to={`/tour-detail-one/${item.id}`} className="text-lg font-medium hover:text-primary duration-500 ease-in-out">{item.title}</Link>

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

                                        <Link to="" className="text-slate-400 hover:text-primary">Explore Now <i className="ri-arrow-right-s-line"></i></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-6 text-center">
                    <Link to="/grid-right-sidebar" className="text-slate-400 hover:text-primary inline-block">See More Tours <i className="ri-arrow-right-s-line"></i></Link>
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