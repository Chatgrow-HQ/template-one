import { useState } from 'react'
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

import Blogs from '../components/blogs'
import Client from '../components/client'
import About from '../components/about'
import Footer from '../components/footer';
import Switcher from '../components/switcher';

import { teamData,placeImage } from "../data/data";

import {FiFacebook, FiInstagram, FiLinkedin} from "react-icons/fi"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface TeamData{
    image: string;
    name: string;
    possition: string;
}

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
                    <h1 className="text-4xl leading-normal tracking-wider font-semibold text-white">About Travosy</h1>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 inset-s-0 inset-e-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Travosy</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">About Us</li>
                </ul>
            </div>
        </section>

        <section className="relative md:pb-24 pb-16">
            <About/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h2 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Meet Your Travel Experts</h2>

                    <p className="text-slate-400 max-w-xl mx-auto">A passionate team of destination specialists, itinerary designers, and support professionals ready to plan your next journey.</p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-7.5">
                    {teamData.map((item:TeamData,index:number)=>{
                        return(
                            <div className="lg:col-span-3 md:col-span-6" key={index}>
                                <div className="group text-center">
                                    <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                        <img src={item.image} className="" alt=""/>
                                        <div className="absolute inset-0 bg-linear-to-b from-transparent to-slate-900 h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500"></div>

                                        <ul className="list-none absolute inset-s-0 inset-e-0 -bottom-20 group-hover:bottom-5 duration-500 space-x-1">
                                            <li className="inline"><Link to="" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-primary bg-primary text-white"><FiFacebook className="size-4"></FiFacebook></Link></li>
                                            <li className="inline"><Link to="" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-primary bg-primary text-white"><FiInstagram className="size-4"></FiInstagram></Link></li>
                                            <li className="inline"><Link to="" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-primary bg-primary text-white"><FiLinkedin className="size-4"></FiLinkedin></Link></li>
                                        </ul>
                                    </div>

                                    <div className="content mt-3">
                                        <Link to="" className="text-lg font-semibold hover:text-primary duration-500">{item.name}</Link>
                                        <p className="text-slate-400">{item.possition}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <Client/>

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

                <div className="absolute top-2/4 -translate-y-2/4 inset-s-2/4 ltr:-translate-x-2/4 rtl:translate-x-2/4 text-center">
                    <Link to="https://www.instagram.com/shreethemes/" target="_blank" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border border-primary bg-primary text-white"><FiInstagram className="size-4"></FiInstagram></Link>
                </div>
            </div>
        </div>
        <Footer/>
        <Switcher/>
        </>
    )
}
