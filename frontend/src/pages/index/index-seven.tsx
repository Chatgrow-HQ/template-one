import { useState } from 'react'
import { Link } from 'react-router-dom'

import Tagline from '../../components/tagline'
import Navbar from '../../components/navbar'
import ServicesTraveler from '../../components/services-Traveler'
import About from '../../components/about'
import Client from '../../components/client'
import Blogs from '../../components/blogs'
import Footer from '../../components/footer'
import Switcher from '../../components/switcher'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { packages } from "../../data/data";

import {FiMapPin,FiCalendar} from 'react-icons/fi'

import bg2 from '../../assets/images/bg/2.jpg'
import bg3 from '../../assets/images/bg/3.jpg'
import bg7 from '../../assets/images/bg/7.jpg'
import client1 from '../../assets/images/client/01.jpg'
import client2 from '../../assets/images/client/02.jpg'
import client3 from '../../assets/images/client/03.jpg'
import client4 from '../../assets/images/client/04.jpg'
import client5 from '../../assets/images/client/05.jpg'

export default function IndexSeven() {

    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());

    const isRTL = document.documentElement.dir === "rtl";

  return (
    <>
        <Tagline/>
        <Navbar navclass="defaultscroll is-sticky tagline-height" navlight={false} manuclass="nav-right justify-end!"/>

        <section className="relative pt-24 pb-4">
            <div className="absolute inset-0 opacity-5 dark:opacity-[0.03] bg-[url('../../assets/images/bg/8.png')] bg-no-repeat bg-center bg-cover"></div>
            <div className="container relative md:mt-16">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-7.5">
                    <div className="md:col-span-4">
                        <div className="md:text-start text-center">
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-6 mt-5">Don't Imagine, <br/> Make It Happen.</h4>

                            <div className="mt-4 md:mt-20">
                                <Link to="" className="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-primary text-white rounded-md">Read More <i className="ri-arrow-right-s-line ms-0.5"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-5">
                        <div className="rounded-full shadow-lg dark:shadow-gray-800 relative overflow-hidden border-8 border-white dark:border-slate-900">
                            <div className="grid grid-cols-1 relative">
                                <div className="tiny-single">
                                    <Swiper
                                        dir={isRTL ? "rtl" : "ltr"}
                                        modules={[Autoplay]}
                                        spaceBetween={12}
                                        slidesPerView={1}
                                        speed={400}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false
                                        }}
                                        grabCursor={true}
                                    >
                                        <SwiperSlide>
                                            <img src={bg2} className="object-cover w-full lg:h-150 md:h-96 h-125" alt="" />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <img src={bg3} className="object-cover w-full lg:h-150 md:h-96 h-125" alt="" />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <img src={bg7} className="object-cover w-full lg:h-150 md:h-96 h-125" alt="" />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        <div className="md:text-end text-center">
                            <p className="text-slate-400 text-xl max-w-xl">Planning for a trip? We will organize your trip with the best places and within best budget!</p>

                            <div className="mt-4">
                                <ul className="list-none relative md:mt-20">
                                    <li className="inline-block relative"><Link to=""><img src={client1} className="size-12 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                    <li className="inline-block relative -ms-4"><Link to=""><img src={client2} className="size-12 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                    <li className="inline-block relative -ms-4"><Link to=""><img src={client3} className="size-12 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                    <li className="inline-block relative -ms-4"><Link to=""><img src={client4} className="size-12 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                    <li className="inline-block relative -ms-4"><Link to=""><img src={client5} className="size-12 rounded-full shadow-md shadow-slate-100 dark:shadow-slate-800 border-4 border-white dark:border-slate-900 relative hover:z-1 hover:scale-105 transition-all duration-500" alt="" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative mt-10">
                <div className="grid grid-cols-1">
                    <form className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm dark:shadow-gray-700">
                        <div className="registration-form text-slate-900 text-start">
                            <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4">
                                <div>
                                    <label className="form-label font-medium text-slate-900 dark:text-white">Search:</label>
                                    <div className="relative mt-2">
                                        <i className="ri-search-line text-lg absolute top-1.75 inset-s-3 text-slate-400"></i>
                                        <input name="name" type="text" id="job-keyword" className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Search" />
                                    </div>
                                </div>

                                <div>
                                    <label className="form-label font-medium text-slate-900 dark:text-white">Select Your Date:</label>
                                    <div className="relative mt-2">
                                        <FiCalendar
                                            className="size-4.5 absolute top-2.5 inset-s-3 z-50 text-slate-500 dark:text-slate-300 pointer-events-none"
                                        />
                                        <DatePicker 
                                            className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 start" 
                                            dateFormat="dd/MM/yyyy" 
                                            placeholderText="Select Your Date" 
                                            selected={startDate}
                                            onChange={(date: Date | null) => setStartDate(date)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="form-label font-medium text-slate-900 dark:text-white">Select Your Date:</label>
                                    <div className="relative mt-2">
                                        <FiCalendar
                                            className="size-4.5 absolute top-2.5 inset-s-3 z-50 text-slate-500 dark:text-slate-300 pointer-events-none"
                                        />
                                        <DatePicker 
                                            className="w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 end" 
                                            dateFormat="dd/MM/yyyy" 
                                            placeholderText="Select Your Date" 
                                            selected={endDate}
                                            onChange={(date: Date | null) => setEndDate(date)}
                                            minDate={startDate ?? undefined}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="form-label font-medium text-slate-900 dark:text-white">No. of person:</label>
                                    <div className="relative mt-2">
                                        <i className="ri-group-line text-lg absolute top-1.75 inset-s-3 text-slate-400"></i>
                                        <select defaultValue="" className="form-select w-full py-2 px-3 ps-10 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                                            <option value="" disabled>No. of person</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="lg:mt-8.75">
                                    <button type="submit" className="py-1 px-5 h-10 inline-block tracking-wide align-middle duration-500 text-base text-center bg-primary text-white rounded-md w-full cursor-pointer">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Our Services For Travelers</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-4 gap-7.5">
                    
                    <ServicesTraveler />

                </div>
            </div>

            <About/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Tours Packages</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {packages.slice(0,8).map((item,index)=>{
                        return(
                            <div className="group rounded-md shadow-sm dark:shadow-gray-700" key={index}>
                                <div className="md:flex md:items-center">
                                    <div className="relative overflow-hidden md:shrink-0 md:rounded-md rounded-t-md shadow-sm dark:shadow-gray-700 md:m-3 mx-3 mt-3">
                                        <img src={item.image} className="h-full w-full object-cover md:w-48 md:h-56 scale-125 group-hover:scale-100 duration-500" alt=""/>
                                        
                                        {item.tagText && (
                                                <div className="absolute top-0 inset-s-0 p-4">
                                                    <span className="bg-primary text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{item.tagText}</span>
                                                </div>
                                            )}
            
                                        <div className="absolute top-0 inset-e-0 p-4">
                                            <Link to="#" className="size-8 inline-flex justify-center items-center bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-full text-slate-100 dark:text-slate-700 focus:text-primary dark:focus:text-primary hover:text-primary dark:hover:text-primary"><i className="ri-heart-fill text-[20px] align-middle"></i></Link>
                                        </div>
                                    </div>
                                    
                                    <div className="p-4 w-full">
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
                                            <h5 className="text-lg font-medium text-primary">{item.amount}</h5>

                                            <Link to="" className="text-slate-400 hover:text-primary">Explore Now <i className="ri-arrow-right-s-line"></i></Link>
                                        </div>
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

        <Footer/>
        <Switcher/>
    </>
  )
}
