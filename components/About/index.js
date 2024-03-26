import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import skillsList from "@/data/skillsList"
import SkillItem from "../SkillItem"
import MobileNavbar from '@/components/NavbarMobile';
import {Timeline} from '@mui/lab'
import TimelineSingleItem from '../TimeLineSingleItem';
import { educationDetails } from '@/data/educationDetails';
import { experienceDetails } from '@/data/experienceDetails';


const About = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [position, setPosition] = useState('alternate');


  useEffect(() => {
    if (isMobile) {
      setPosition('right');
    } else {
      setPosition('alternate');
    }
  }, [isMobile]);


    return(
        <div className="bg-black min-h-screen w-screen overflow-x-hidden flex flex-col justify-center items-center pt-[60px] md:pt-[100px] pb-[50px] md:pb-[100px]">
            <MobileNavbar/>
            <h1 className="text-yellow-400 font-bold   text-[30px] md:text-[40px] mb-4"><span className="text-white">I'M</span> CONFIDENT In.</h1>
            <ul className="flex justify-center items-center flex-wrap w-screen md:w-4/6 mb-8">
                {skillsList.map((each)=><SkillItem details={each} key={each.name}/>)}
            </ul>
            <h1  className="text-yellow-400 font-bold text-[25px] md:text-[40px] text-center mb-4 mt-[30px] md:mt-[90px]">EXPERIENCE <span className="text-white">&</span> EDUCATION</h1>
            <div className="flex flex-col md:flex-row w-screen  flex-wrap md:w-[1200px] mb-8 ">
              <div>
                <Timeline position={position} >
                <ul>
                    {experienceDetails.map((each)=><TimelineSingleItem key={each.id} details={each} />)}
                  </ul>
                </Timeline>
              </div>
              <div className="mt-[80px] md:mt-0">
                <Timeline position={position}>
                  <ul>
                    {educationDetails.map((each)=><TimelineSingleItem key={each.id} details={each} />)}
                  </ul>
                </Timeline>
              </div>   
            </div>
        </div>
    )
}

export default About