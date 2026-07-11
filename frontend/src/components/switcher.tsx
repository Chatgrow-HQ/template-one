import {useState} from "react";
import { Link } from "react-router-dom";

import {FiSun, FiMoon} from 'react-icons/fi'
export default function Switcher(){
    let [visible, setVisible] = useState<boolean>(false) 

    let htmlTag = document.getElementsByTagName("html")[0]
    const changeTheme = () => {
        console.log(htmlTag);
        if (htmlTag.className.includes("dark")) {
            htmlTag.className = 'light'
        } else {
            htmlTag.className = 'dark'
        }
    }

    const modeChange = () =>{
        const switcherRtl = document.getElementById("switchRtl")
        if(switcherRtl){
            if(switcherRtl.innerText === "LTR"){
                htmlTag.dir = "ltr"
            }
            else{
                htmlTag.dir = "rtl"
            }
        }
    }

    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 300){ 
          setVisible(true) 
        }  
        else if (scrolled <= 300){ 
          setVisible(false) 
        } 
      }; 

      const scrollToTop = () =>{ 
        window.scrollTo({ 
          top: 0,  
          behavior: 'smooth'
        }); 
    }; 

    window.addEventListener('scroll', toggleVisible); 

    return(
        <>
        <div className="fixed top-1/4 -left-2 z-50">
            <span className="relative inline-block rotate-90">
                <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" onChange={()=>changeTheme()}/>
                <label className="label bg-slate-900 dark:bg-white shadow-sm dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" htmlFor="chk">
                    <FiMoon className="w-4.5 h-4.5 text-yellow-500"></FiMoon>
                    <FiSun className="w-4.5 h-4.5 text-yellow-500"></FiSun>
                    <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-0.5 left-0.5 size-7"></span>
                </label>
            </span>
        </div>

        <div className="fixed top-[40%] -left-3 z-50">
            <Link to="" id="switchRtl" onClick={()=>modeChange()}>
                <span className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow-sm dark:shadow-gray-800 font-semibold rtl:block ltr:hidden" >LTR</span>
                <span className="py-1 px-3 relative inline-block rounded-b-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow-sm dark:shadow-gray-800 font-semibold ltr:block rtl:hidden">RTL</span>
            </Link>
        </div>

        <Link to="#" onClick={()=>scrollToTop()} id="back-to-top" className="back-to-top fixed text-lg rounded-md z-10 bottom-5 inset-e-5 size-8 text-center bg-primary/10 hover:bg-primary text-primary hover:text-white justify-center items-center" style={{display: visible ? 'inline-flex' : 'none'}}><i className="ri-arrow-up-s-line"></i></Link>
        </>
    )
}