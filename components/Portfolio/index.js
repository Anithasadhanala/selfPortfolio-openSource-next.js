'use client'

import InitiativesItem from "../InitiativesItem";
import ProjectItem from "../ProjectItem";
import MobileNavbar from '@/components/NavbarMobile';


const Portfolio = () => {
  
    return(
        <div className="bg-black min-h-screen w-screen flex flex-col justify-center items-center pt-[80px] pb-[80px]">
            <MobileNavbar/>
            <h1 className="text-white font-bold   text-[25px] md:text-[40px] mb-4">MY <span className="text-yellow-400">PORTFOLIO</span></h1>
            <ul className="flex justify-center  flex-wrap w-screen md:w-[800px] ">
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
            </ul>

            <h1 className="text-white font-bold mt-[60px] mb-[40px]  text-[25px] md:text-[40px] ">MY <span className="text-yellow-400 ">INITIAVITES</span></h1>

            <div className="mr-5 ml-5 bg-pink-400 md:mr-0 md:ml-0">
            <InitiativesItem/>
            <InitiativesItem/>
            <InitiativesItem/><InitiativesItem/>
            </div>

  
           
    </div>
  );
            }

export default Portfolio