import { ClientData } from "../data/data";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

interface ClientData{
    image: string;
    desc: string;
    name: string;
    possition: string;
}

export default function Client(){

    const isRTL = document.documentElement.dir === "rtl";

    return(
        <div className="container relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-6 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">What Our Travellers Say</h3>

            <p className="text-slate-400 max-w-xl mx-auto">Real experiences from travellers who trusted us to bring their holidays to life.</p>
        </div>

        <div className="grid grid-cols-1 mt-6">
            <div className="tiny-three-item">
                <Swiper
                    dir={isRTL ? "rtl" : "ltr"}
                    modules={[Autoplay, Pagination]}
                    spaceBetween={12}
                    slidesPerView={1}
                    speed={400}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        el: '.custom-pagination',
                        clickable: true
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        767: { slidesPerView: 2 },
                        992: { slidesPerView: 3 }
                    }}
                    grabCursor={true}
                >
                    {ClientData.map((item:ClientData,index:number)=>{
                        return(
                            <SwiperSlide key={index}>
                                <div className="text-center">
                                    <div className="cursor-e-resize">
                                        <div className="content relative rounded-sm shadow-sm dark:shadow-gray-700 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:inset-s-1/2 before:-bottom-1 before:box-border before:border-8 before:rotate-45 before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                                            <i className="ri-double-quotes-l text-5xl text-primary"></i>
                                            <p className="text-slate-400">{item.desc}</p>
                                            <ul className="list-none mb-0 text-amber-400 mt-3">
                                                <li className="inline"><i className="ri-star-s-fill"></i></li>
                                                <li className="inline"><i className="ri-star-s-fill"></i></li>
                                                <li className="inline"><i className="ri-star-s-fill"></i></li>
                                                <li className="inline"><i className="ri-star-s-fill"></i></li>
                                                <li className="inline"><i className="ri-star-s-fill"></i></li>
                                            </ul>
                                        </div>
                                        
                                        <div className="text-center mt-5">
                                            <img src={item.image} className="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt=""/>
                                            <h6 className="mt-2 font-semibold">{item.name}</h6>
                                            <span className="text-slate-400 text-sm">{item.possition}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

                {/* CUSTOM DOTS */}
                <div className="custom-pagination flex justify-center mt-6"></div>

            </div>
        </div>
    </div>
    )
}

