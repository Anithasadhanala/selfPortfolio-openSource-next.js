'use client'

import { initiatives } from "@/data/initiatives";
import InitiativesItem from "../InitiativesItem";
import ProjectItem from "../ProjectItem";
import MobileNavbar from '@/components/NavbarMobile';
import { projectsList } from "@/data/projectsList";



// portfolio tab renders this component
const Portfolio = () => {
  
    return(
        <div className="bg-black min-h-screen w-screen flex flex-col justify-center items-center pt-[80px] pb-[80px]">
            <MobileNavbar/>
            <h1 className="text-white font-bold   text-[30px] md:text-[40px] mb-4">MY <span className="text-yellow-400">PORTFOLIO</span></h1>
            <ul className="flex justify-center  flex-wrap w-screen md:w-[1000px] ">
                {projectsList.map((each)=><ProjectItem key={each.id} details={each}/>)}
            </ul>
            <h1 className="text-white font-bold mt-[60px] mb-[40px]  text-[30px] md:text-[40px] ">MY <span className="text-yellow-400 ">INITIAVITES</span></h1>
            <div className="mr-5 ml-5  md:mr-0 md:ml-0">
                <ul>
                    {initiatives.map((each)=> <InitiativesItem key={each.id} details={each}/>)}
                </ul>
            </div>
    </div>
  );
}

export default Portfolio