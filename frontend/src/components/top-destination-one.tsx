import { Link } from "react-router-dom";
import { topDestination } from "../data/data";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

interface Destinations{
    image: string;
    place: string;
    hotels: string;
}

export default function TopDestinationOne(){

    const isRTL = document.documentElement.dir === "rtl";

    return(
        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 pb-8 text-center">
                <span className="text-primary font-semibold uppercase tracking-widest text-sm">Find your inspiration</span>
                <h2 className="mb-6 mt-3 md:text-4xl text-3xl md:leading-normal leading-normal font-semibold">Where will you go next?</h2>

                <p className="text-slate-400 max-w-xl mx-auto">Explore some of the destinations our travellers love, each ready to be shaped into a journey that feels uniquely yours.</p>
            </div>

            <div className="grid grid-cols-1 relative mt-6">
                <div className="tiny-five-item">
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
                                slidesPerView: 5
                            },
                            992: {
                                slidesPerView: 4
                            },
                            767: {
                                slidesPerView: 3
                            },
                            425: {
                                slidesPerView: 1
                            }
                        }}
                        grabCursor={true}
                    >
                        {topDestination.map((item:Destinations,index:number)=>{
                            return(
                                <SwiperSlide key={index}>
                                    <div className="group relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-800 m-2">
                                        <img src={item.image} className="w-full h-72 object-cover scale-125 group-hover:scale-100 duration-500" alt=""/>
                                        <div className="absolute inset-0 bg-linear-to-b to-slate-900 from-transparent opacity-0 group-hover:opacity-100 duration-500"></div>
                                        <div className="absolute p-4 bottom-0 inset-s-0">
                                            <Link to="/contact-us" className="text-lg font-medium text-white hover:text-primary duration-500 ease-in-out">{item.place}</Link>
                                            <p className="text-white/70 group-hover:text-white text-sm duration-500">Build my itinerary</p>
                                        </div>
                                    </div>
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
            </div>
        </div>
    )
}
