import { useState } from 'react'
import { Link } from 'react-router-dom';

import Tagline from '../../components/tagline'
import Navbar from '../../components/navbar'
import TopDestinationTwo from '../../components/top-destination-two';
import About from '../../components/about';
import Client from '../../components/client';
import Blogs from '../../components/blogs';
import Footer from '../../components/footer';
import Switcher from '../../components/switcher';

import faqImg from "../../assets/images/bg/6.jpg"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { faqData, packages } from '../../data/data';

import { FiMapPin ,FiChevronDown } from 'react-icons/fi'

type TabType = "flight" | "hotel" | "trip";

type FormFields = {
    search: string;
    startDate: Date;
    endDate: Date;
    person: string;
};

type FormDataType = {
    flight: FormFields;
    hotel: FormFields;
    trip: FormFields;
};

export default function IndexSix() {

    let [activeIndex, setActiveIndex] = useState(1)

    // ACTIVE TAB
    const [activeTab, setActiveTab] = useState<TabType>("flight");

    // RTL CHECK
    const isRTL = document.documentElement.dir === "rtl";

    // DATE STATES
    const [formData, setFormData] = useState<FormDataType>({
        flight: {
            search: "",
            startDate: new Date(),
            endDate: new Date(),
            person: "",
        },

        hotel: {
            search: "",
            startDate: new Date(),
            endDate: new Date(),
            person: "",
        },

        trip: {
            search: "",
            startDate: new Date(),
            endDate: new Date(),
            person: "",
        },
    });

    // HANDLE INPUT CHANGE
    const handleChange = (
        tab: TabType,
        field: keyof FormFields,
        value: string | Date
    ) => {
        setFormData((prev) => ({
            ...prev,
            [tab]: {
                ...prev[tab],
                [field]: value,
            },
        }));
    };

    // TAB BUTTON CLASS
    const tabButtonClass = (tabName: TabType) =>
        `sm:px-8 py-1 px-5 h-10 text-base font-medium rounded-md w-full transition-all duration-500 ease-in-out ${
            activeTab === tabName
                ? "bg-primary text-white"
                : "hover:text-primary text-slate-900 dark:text-white"
        }`;

    // REUSABLE FORM
    const renderForm = (tab: TabType) => (
        <form action="#">
            <div className="registration-form text-slate-900 text-start">
                <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-4">

                    {/* SEARCH */}
                    <div>
                        <label className="form-label font-medium text-slate-900 dark:text-white">
                            Search:
                        </label>

                        <div className="relative mt-2">
                            <i className={`ri-search-line text-lg absolute top-1/2 -translate-y-1/2 text-slate-400 ${isRTL ? "right-3" : "left-3"}`}></i>

                            <input
                                type="text"
                                value={formData[tab].search}
                                onChange={(e) =>
                                    handleChange(tab, "search", e.target.value)
                                }
                                className={`w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 ${
                                    isRTL ? "pr-10" : "pl-10"
                                }`}
                                placeholder="Search"
                            />
                        </div>
                    </div>

                    {/* START DATE */}
                    <div>
                        <label className="form-label font-medium text-slate-900 dark:text-white">
                            Select Your Date:
                        </label>

                        <div className="relative mt-2">
                            <i className={`ri-calendar-2-line text-lg absolute top-1/2 -translate-y-1/2 text-slate-400 z-10 ${isRTL ? "right-3" : "left-3"}`}></i>

                            <DatePicker
                                selected={formData[tab].startDate}
                                onChange={(date: Date | null) => {
                                    if (date) {
                                        handleChange(tab, "startDate", date);
                                    }
                                }}
                                className={`w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 ${
                                    isRTL ? "pr-10 text-right" : "pl-10"
                                }`}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Select Date"
                            />
                        </div>
                    </div>

                    {/* END DATE */}
                    <div>
                        <label className="form-label font-medium text-slate-900 dark:text-white">
                            Select Your Date:
                        </label>

                        <div className="relative mt-2">
                            <i className={`ri-calendar-2-line text-lg absolute top-1/2 -translate-y-1/2 text-slate-400 z-10 ${isRTL ? "right-3" : "left-3"}`}></i>

                            <DatePicker
                                selected={formData[tab].endDate}
                                onChange={(date: Date | null) => {
                                    if (date) {
                                        handleChange(tab, "endDate", date);
                                    }
                                }}
                                className={`w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 ${
                                    isRTL ? "pr-10 text-right" : "pl-10"
                                }`}
                                dateFormat="dd/MM/yyyy"
                                placeholderText="Select Date"
                            />
                        </div>
                    </div>

                    {/* PERSON */}
                    <div>
                        <label className="form-label font-medium text-slate-900 dark:text-white">
                            No. of person:
                        </label>

                        <div className="relative mt-2">
                            <i className={`ri-group-line text-lg absolute top-1/2 -translate-y-1/2 text-slate-400 ${isRTL ? "right-3" : "left-3"}`}></i>

                            <select
                                value={formData[tab].person}
                                onChange={(e) =>
                                    handleChange(tab, "person", e.target.value)
                                }
                                className={`form-select w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 ${
                                    isRTL ? "pr-10" : "pl-10"
                                }`}
                            >
                                <option value="" disabled>
                                    No. of person
                                </option>

                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>

                    {/* BUTTON */}
                    <div className="lg:mt-[35px]">
                        <button
                            type="submit"
                            className="py-1 px-5 h-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center bg-primary text-white rounded-md w-full cursor-pointer"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );

  return (
    <>
        <Tagline/>
        <Navbar navclass="defaultscroll is-sticky tagline-height" navlight={true} manuclass="justify-end! nav-light"/>

        <section className="relative md:h-screen py-36 flex items-center w-full bg-[url('../../assets/images/bg/7.jpg')] bg-center bg-no-repeat bg-fixed bg-cover">
            <div className="absolute inset-0 bg-slate-900/40"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 items-center text-center gap-7.5">
                    <div className="">
                        <h4 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-7xl mb-4">Don't Imagine, <br/> Make It Happen. Travosy</h4>
                        <p className="text-white/70 text-xl max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                    </div>
                </div>

                <div className="grid grid-cols-1">
                    <ul className="inline-block mx-auto sm:w-fit w-full flex-wrap justify-center text-center p-4 bg-white dark:bg-slate-900 backdrop-blur-sm rounded-t-md border-b border-gray-200 dark:border-gray-800 mt-10" id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                        
                        <li role="presentation" className="inline-block">
                            <button
                                onClick={() => setActiveTab("flight")}
                                className={tabButtonClass("flight")}
                            >
                                Flight
                            </button>
                        </li>

                        <li role="presentation" className="inline-block">
                            <button
                                onClick={() => setActiveTab("hotel")}
                                className={tabButtonClass("hotel")}
                            >
                                Hotel
                            </button>
                        </li>

                        <li role="presentation" className="inline-block">
                            <button
                                onClick={() => setActiveTab("trip")}
                                className={tabButtonClass("trip")}
                            >
                                Trip
                            </button>
                        </li>

                    </ul>

                    <div id="StarterContent" className="p-6 bg-white dark:bg-slate-900 md:rounded-md rounded-none shadow-md dark:shadow-gray-700">
                        
                        {activeTab === "flight" && renderForm("flight")}

                        {activeTab === "hotel" && renderForm("hotel")}

                        {activeTab === "trip" && renderForm("trip")}

                    </div>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">

            <TopDestinationTwo/>

            <About/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Tours Packages</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Planning for a trip? We will organize your trip with the best places and within best budget!</p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {packages.slice(0,8).map((item,index)=>{
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
                                        <ul className="text-lg font-medium text-amber-400 list-none ms-2">
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

                <div className="mt-6 text-center">
                    <Link to="/grid-right-sidebar" className="text-slate-400 hover:text-primary inline-block">See More Tours <i className="ri-arrow-right-s-line"></i></Link>
                </div>
            </div>

            <Client/>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Frequently Asked Questions</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                </div>

                <div className="relative grid md:grid-cols-12 grid-cols-1 items-center mt-6 gap-6">
                    <div className="md:col-span-6">
                        <img src={faqImg} className="w-full h-135 object-cover rounded-md shadow-sm dark:shadow-gray-800" alt=""/>
                    </div>

                    <div className="md:col-span-6">
                        <div>
                            {faqData.map((item,index)=>{
                                return(
                                    <div className="relative shadow-sm dark:shadow-gray-800 rounded-md overflow-hidden mt-4 first:mt-0" key={index}>
                                        <h2 className="text-base font-semibold" id="accordion-collapse-heading-1">
                                            <button type="button" className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndex === item.id ? 'bg-gray-50 dark:bg-slate-800 text-primary' : ''}`} onClick={()=>setActiveIndex(item.id)}>
                                                <span>{item.title}</span>
                                                <FiChevronDown className={`w-4 h-4 shrink-0 ${activeIndex === item.id ? 'rotate-180' : ''}`}></FiChevronDown>
                                            </button>
                                        </h2>
                                        <div className={activeIndex === item.id ? "" : "hidden" }>
                                            <div className="p-5">
                                                <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <Blogs/>

        </section>

        <Footer/>
        <Switcher/>
    </>
  )
}
