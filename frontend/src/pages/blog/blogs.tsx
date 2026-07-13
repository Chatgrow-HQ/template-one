import { Link } from "react-router-dom";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import { blogData } from "../../data/data";

import {FiClock, FiChevronRight, FiChevronLeft} from 'react-icons/fi'

export default function Blogs(){
    return(
        <>
        <Navbar navclass="defaultscroll is-sticky" navlight={true} manuclass="justify-end! nav-light"/>
        <section className="relative table w-full items-center py-36 bg-[url('../../assets/images/bg/cta.jpg')] bg-top bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-linear-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h1 className="text-4xl leading-normal tracking-wider font-semibold text-white">Travel Journal</h1>
                </div>
            </div>
            
            <div className="absolute text-center z-10 bottom-5 inset-s-0 inset-e-0 mx-3">
                <ul className="tracking-[0.5px] mb-0 inline-block">
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link to="/">Skyways</Link></li>
                    <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></li>
                    <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Blogs</li>
                </ul>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-end mb-12">
                    <div>
                        <span className="text-primary font-semibold uppercase tracking-widest text-sm">Ideas for your next journey</span>
                        <h2 className="md:text-4xl text-3xl font-semibold mt-3">Travel better, one story at a time.</h2>
                    </div>
                    <p className="text-slate-400 md:max-w-lg md:ms-auto">Practical advice, destination guides, and honest inspiration from our travel specialists and journeys on the ground.</p>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {blogData.map((item,index)=>{
                        return(
                            <div className="group relative overflow-hidden" key={index}>
                                <div className="relative overflow-hidden rounded-md shadow-sm dark:shadow-gray-800">
                                    <img src={item.image} className="group-hover:scale-110 group-hover:rotate-3 duration-500" alt=""/>
                                    <div className="absolute top-0 inset-s-0 p-4 opacity-0 group-hover:opacity-100 duration-500">
                                        <span className="bg-primary text-white text-[12px] px-2.5 py-1 font-medium rounded-md h-5">{item.tag}</span>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <div className="flex mb-4">
                                        <span className="flex items-center text-slate-400 text-sm"><FiClock className="size-4 text-slate-900 dark:text-white me-1.5"></FiClock>5 min read</span>
                                        <span className="text-slate-400 text-sm ms-3">by <Link to="" className="text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary font-medium">Skyways</Link></span>
                                    </div>

                                    <Link to={`/blog/${item.id}`} className="text-lg font-medium hover:text-primary duration-500 ease-in-out">{item.title}</Link>
                                    <p className="text-slate-400 mt-2">{item.desc}</p>

                                    <div className="mt-3">
                                        <Link to={`/blog/${item.id}`} className="hover:text-primary inline-flex items-center">Read More <FiChevronRight className="size-4 ms-1"></FiChevronRight></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                    <div className="md:col-span-12 text-center">
                        <nav aria-label="Page navigation example">
                            <ul className="inline-flex items-center -space-x-px">
                                <li>
                                    <Link to="#" className="size-10 inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-primary dark:hover:border-primary hover:bg-primary dark:hover:bg-primary">
                                        <FiChevronLeft className="size-5 rtl:rotate-180 rtl:-mt-1"></FiChevronLeft>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-10 inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-primary dark:hover:border-primary hover:bg-primary dark:hover:bg-primary">1</Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-10 inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-primary dark:hover:border-primary hover:bg-primary dark:hover:bg-primary">2</Link>
                                </li>
                                <li>
                                    <Link to="#" aria-current="page" className="z-10 size-10 inline-flex justify-center items-center text-white bg-primary border border-primary">3</Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-10 inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-primary dark:hover:border-primary hover:bg-primary dark:hover:bg-primary">4</Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-10 inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-primary dark:hover:border-primary hover:bg-primary dark:hover:bg-primary">5</Link>
                                </li>
                                <li>
                                    <Link to="#" className="size-10 inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-primary dark:hover:border-primary hover:bg-primary dark:hover:bg-primary">
                                        <FiChevronRight className="size-5 rtl:rotate-180 rtl:-mt-1"></FiChevronRight>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>

        </>
    )
}
