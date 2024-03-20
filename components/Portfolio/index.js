'use client'

import InitiativesItem from "../InitiativesItem";
import ProjectItem from "../ProjectItem";


const Portfolio = () => {
  
    return(
        <div className="bg-black min-h-screen w-screen flex flex-col justify-center items-center pt-[80px] pb-[80px]">
            <h1 className="text-white font-bold   text-[40px] mb-4">MY <span className="text-yellow-400">PORTFOLIO</span></h1>
            <ul className="flex justify-center flex-wrap w-[800px] ">
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
            </ul>

            <h1 className="text-white font-bold mt-[60px] mb-[40px]  text-[40px] mb-4 ">MY <span className="text-yellow-400 ">INITIAVITES</span></h1>


            <InitiativesItem/>
            <InitiativesItem/>
            <InitiativesItem/><InitiativesItem/>

  
           
    </div>
  );
            }

export default Portfolio