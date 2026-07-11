import { useState } from 'react'
import { Link } from "react-router-dom";

import Tagline from "../../components/tagline";
import Navbar from "../../components/navbar";
import Form from "../../components/form";
import Footer from '../../components/footer'
import Client from "../../components/client";
import About from "../../components/about";
import Switcher from '../../components/switcher';

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay,EffectFade,Navigation  } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { packages, placeImage, topDestination } from "../../data/data";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import {FiInstagram, FiMapPin} from 'react-icons/fi'

interface Package{
    id: number;
    image: string;
    place: string;
    title: string;
    amount: string;
    tagText?: string;
}

interface Destinations{
    image: string;
    place: string;
    hotels: string;
}

export default function IndexThree(){
    let [isOpen, setisOpen] = useState<boolean>(false);
    let [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const slides = placeImage.map((image) => ({ src: image }));

    let handleImageClick = (index:number) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };

    const isRTL = document.documentElement.dir === "rtl";
    
    return(
        <>
        <Tagline/>
        <Navbar navclass="defaultscroll is-sticky tagline-height" navlight={true} manuclass="justify-end! nav-light"/>
        <Swiper className="swiper-wrapper" loop={true} speed={2000} autoplay={{delay:4000}} effect="fade" modules={[Autoplay,EffectFade ]}>
            <SwiperSlide>
                <section className="relative md:pt-48 md:pb-36 py-36 table w-full items-center bg-center bg-[url('../../assets/images/bg/4.jpg')]" id="home">
                    <div className="absolute inset-0 bg-slate-900/40"></div>
                    <div className="container relative">
                        <div className="grid grid-cols-1 text-center mb-12">
                            <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Let the journey begin...</h1>
                            <p className="text-white/70 text-xl max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                            </div>
                        <Form/>
                    </div>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className="relative md:pt-48 md:pb-36 py-36 table w-full items-center bg-center bg-[url('../../assets/images/bg/5.jpg')]" id="home">
                    <div className="absolute inset-0 bg-slate-900/40"></div>
                    <div className="container relative">
                        <div className="grid grid-cols-1 text-center mb-12">
                            <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Let the journey begin...</h1>
                            <p className="text-white/70 text-xl max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                            </div>
                        <Form/>
                    </div>
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className="relative md:pt-48 md:pb-36 py-36 table w-full items-center bg-center bg-[url('../../assets/images/bg/6.jpg')]" id="home">
                    <div className="absolute inset-0 bg-slate-900/40"></div>
                    <div className="container relative">
                        <div className="grid grid-cols-1 text-center mb-12">
                            <h1 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-6xl mb-6 mt-5">Let the journey begin...</h1>
                            <p className="text-white/70 text-xl max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                        </div>
                        <Form/>
                    </div>
                </section>
            </SwiperSlide>
        </Swiper>

        <section className="relative md:py-24 py-16 overflow-hidden">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Top Destinations</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 relative mt-6 gap-6">
                    {topDestination.map((item:Destinations,index:number)=>{
                        return(
                            <div className="group relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-800" key={index}>
                                <img src={item.image} className="scale-125 group-hover:scale-100 duration-500" alt=""/>
                                <div className="absolute inset-0 bg-linear-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
                                <div className="absolute p-4 bottom-0 inset-s-0">
                                    <Link to="" className="text-lg font-medium text-white hover:text-primary duration-500 ease-in-out">{item.place}</Link>
                                    <p className="text-white/70 group-hover:text-white text-sm duration-500">{item.hotels}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <About/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Tours Packages</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {packages.map((item:Package,index:number)=>{
                        return(
                            <div className="group rounded-md shadow-sm dark:shadow-gray-700" key={index}>
                                <div className="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-700 mx-2 mt-2">
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

                                <div className="p-3">
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
                                    
                                    <div className="mt-3 pt-3 flex justify-between items-center border-t border-slate-100 dark:border-gray-800">
                                        <h5 className="text-lg font-medium text-primary">{item.amount}</h5>

                                        <Link to="" className="text-slate-400 hover:text-primary">Explore Now <i className="ri-arrow-right-s-line"></i></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <Client/>
        </section>
        <div className="container-fluid relative">
            <div className="grid grid-cols-1 relative">
                <div className="tiny-twelve-item">

                    <Swiper
                        dir={isRTL ? "rtl" : "ltr"}
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