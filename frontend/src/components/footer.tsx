import { Link } from "react-router-dom";

import { footerCompany } from "../data/data";
import {FiMapPin, FiMail, FiNavigation, FiPhone} from 'react-icons/fi'

interface Company{
    name: string;
    link: string;
}

export default function Footer(){
    return(
        <footer className="footer bg-slate-900 dark:bg-slate-800 relative text-gray-200 dark:text-gray-200">    
            <div className="container relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="py-15 px-0">
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                                <div className="lg:col-span-3 md:col-span-12">
                                    <Link to="#" className="text-[22px] focus:outline-none">
                                        <span className="inline-flex items-center gap-2 text-2xl font-bold text-white"><FiNavigation className="text-primary" /> Skyways</span>
                                    </Link>
                                    <p className="mt-6 text-gray-300">Making domestic and international travel easier through professional planning, reservations, ticketing, and dependable support.</p>
                                </div>

                                <div className="lg:col-span-3 md:col-span-4">
                                    <div className="lg:ms-8">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">Office</h5>
                                        <h5 className="tracking-[1px] text-gray-100 mt-6">Skyways Travels &amp; Tours Ltd.</h5>

                                        <div className="flex mt-4">
                                            <FiMapPin className="size-4 text-lg text-primary me-2 mt-1"></FiMapPin>
                                            <div className="">
                                                <h6 className="text-gray-300">Suite 24, Tafawa Balewa Square, <br/> Lagos, Nigeria</h6>
                                            </div>
                                        </div>

                                        <div className="flex mt-4">
                                            <FiMail className="size-4 text-lg text-primary me-2 mt-1"></FiMail>
                                            <div className="">
                                                <Link to="mailto:skywaystravelsandtours@yahoo.com" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">skywaystravelsandtours@yahoo.com</Link>
                                            </div>
                                        </div>
                        
                                        <div className="flex mt-4">
                                            <FiPhone className="size-4 text-lg text-primary me-2 mt-1"></FiPhone>
                                            <div className="">
                                                <Link to="tel:+2348037120276" className="text-slate-300 hover:text-slate-400 duration-500 ease-in-out">0803 712 0276</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                
                                <div className="lg:col-span-3 md:col-span-4">
                                    <div className="lg:ms-8">
                                        <h5 className="tracking-[1px] text-gray-100 font-semibold">Company</h5>
                                        <ul className="list-none footer-list mt-6">
                                            {footerCompany.map((item:Company,index:number)=>{
                                                return(
                                                    <li className="mt-2.5 first:mt-0" key={index}><Link to={item.link} className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="ri-arrow-right-s-line"></i> {item.name}</Link></li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
    
                                <div className="lg:col-span-3 md:col-span-4">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold">Newsletter</h5>
                                    <p className="mt-6">Get destination ideas, travel tips, and seasonal offers in your inbox.</p>
                                    <form>
                                        <div className="grid grid-cols-1">
                                            <div className="my-3">
                                                <label className="form-label">Write your email <span className="text-primary-600">*</span></label>
                                                <div className="form-icon relative mt-2">
                                                    <FiMail className="size-4 absolute top-3 inset-s-4"></FiMail>
                                                    <input type="email" className="ps-12 rounded-sm w-full py-2 px-3 h-10 bg-gray-800 dark:bg-gray-700 border-0 text-gray-100 focus:shadow-none focus:ring-0 placeholder:text-gray-200 outline-none" placeholder="Email" name="email" required/>
                                                </div>
                                            </div>
                                        
                                            <button type="submit" id="submitsubscribe" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-primary text-white rounded-md">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-7.5 px-0 border-t border-gray-800 dark:border-gray-700">
                <div className="container relative text-center">
                    <div className="grid grid-cols-1">
                        <div className="text-center">
                            <p className="mb-0">© {new Date().getFullYear()} Skyways Travels &amp; Tours Limited. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
