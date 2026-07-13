import { useState } from 'react'
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

import Blogs from '../components/blogs'
import Client from '../components/client'
import About from '../components/about'
import Footer from '../components/footer';
import { FinalCta } from '../components/home-conversion';

import { placeImage } from "../data/data";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Aboutus(){
    let [isOpen, setisOpen] = useState<boolean>(false);
    let [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const slides = placeImage.map((image:any) => ({ src: image }));

    const handleImageClick = (index:number) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };

    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="justify-end! nav-light"/>
        <section className="relative table w-full items-center py-36 bg-[url('../../assets/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-linear-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h1 className="text-4xl leading-normal tracking-wider font-semibold text-white">About Skyways</h1>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 inset-s-0 inset-e-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Skyways</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">About Us</li>
                </ul>
            </div>
        </section>

        <section className="relative md:pb-24 pb-16">
            <About/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <span className="text-primary font-semibold uppercase tracking-widest text-sm">Leadership &amp; mission</span>
                    <h2 className="mb-6 mt-3 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Built on experience, professionalism, and service</h2>

                    <p className="text-slate-400 max-w-2xl mx-auto">Our mission is to help clients undertake domestic and international travel with complete ease—removing the stress from itinerary planning, group organisation, reservations, and ticketing.</p>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 mt-8 gap-6">
                    <article className="rounded-xl border border-slate-100 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-slate-900">
                        <p className="text-primary text-sm font-semibold uppercase tracking-widest">Chairman</p>
                        <h3 className="text-xl font-semibold mt-2">Mr. Tayo Soetan</h3>
                        <p className="text-slate-400 mt-4">Founder and business leader with experience across finance, investment, leasing, car rental, and bureau de change services. He has served in senior credit and investment roles and on the boards of several companies.</p>
                    </article>
                    <article className="rounded-xl border border-slate-100 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-slate-900">
                        <p className="text-primary text-sm font-semibold uppercase tracking-widest">Managing Director</p>
                        <h3 className="text-xl font-semibold mt-2">Mrs. Kemi Soetan</h3>
                        <p className="text-slate-400 mt-4">A chartered accountant and Fellow of ICAN with an MBA from the University of Texas at Austin. Her professional development includes airline ticketing, operations, reservation systems, and tourism expertise.</p>
                    </article>
                </div>
            </div>

            <Client/>

            <FinalCta/>

            <Blogs/>
        </section>
        <div className="container-fluid relative">
            <div className="grid grid-cols-1 relative">
                <div className="tiny-twelve-item">
                    
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        slidesPerView={1}
                        speed={400}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        navigation={{
                            nextEl: '.swiper-next',
                            prevEl: '.swiper-prev',
                        }}
                        breakpoints={{
                            1025: {
                                slidesPerView: 12
                            },
                            992: {
                                slidesPerView: 8
                            },
                            767: {
                                slidesPerView: 6
                            },
                            575: {
                                slidesPerView: 5
                            },
                            420: {
                                slidesPerView: 3
                            },
                            320: {
                                slidesPerView: 2
                            }
                        }}
                        grabCursor={true}
                    >
                        {placeImage.map((item:string,index:number)=>{
                            return(
                                <SwiperSlide key={index}>
                                    <Link to="" onClick={() => handleImageClick(index)} className="lightbox d-inline-block" title="">
                                        <img src={item} className="sm:size-40 object-cover" alt=""/>
                                    </Link>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                    <button className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 size-8 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:bg-primary hover:text-white transition cursor-pointer">
                        <i className="ri-arrow-left-s-line text-2xl"></i>
                    </button>

                    <button className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 size-8 bg-white dark:bg-slate-800 rounded-full shadow-sm hover:bg-primary hover:text-white transition cursor-pointer">
                        <i className="ri-arrow-right-s-line text-2xl"></i>
                    </button>
                    
                </div>

                <Lightbox
                    open={isOpen}
                    close={() => setisOpen(false)}
                    slides={slides}
                    index={currentImageIndex} // Show the clicked image first
                />

            </div>
        </div>
        <Footer/>
        </>
    )
}
