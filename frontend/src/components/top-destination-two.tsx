import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { topDestination } from "../data/data";

interface Destinations{
    image: string;
    place: string;
    hotels: string;
}

export default function TopDestinationTwo(){

    const isRTL = document.documentElement.dir === "rtl";

    return(
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Top Destinations</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                </div>

                <div className="grid grid-cols-1 relative mt-4">
                    <div className="tiny-six-item">
                        
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
                                    slidesPerView: 6
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
                                        <div className="group text-center m-2">
                                            <div className="relative overflow-hidden rounded-full">
                                                <img src={item.image} className="w-full md:h-32 h-36 object-cover scale-125 group-hover:scale-100 duration-500 shadow-sm dark:shadow-gray-800" alt=""/>
                                            </div>
            
                                            <div className="mt-2">
                                                <Link to="" className="text-lg font-medium hover:text-primary duration-500 ease-in-out">{item.place}</Link>
                                                <p className="text-slate-400 text-sm duration-500">{item.hotels}</p>
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