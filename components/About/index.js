import skillsList from "@/data/skillsList"
import SkillItem from "../SkillItem"
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
  } from '@mui/lab'


const About = () => {

    return(

        <div className="bg-black min-h-screen w-screen overflow-x-hidden flex flex-col justify-center items-center pt-[60px] md:pt-[100px] pb-[50px] md:pb-[100px]">
            <h1 className="text-yellow-400 font-bold   text-[25px] md:text-[40px] mb-4"><span className="text-white">I'M</span> CONFIDENT In.</h1>
            <ul className="flex justify-center items-center flex-wrap w-screen md:w-4/6 mb-8">
                {skillsList.map((each)=><SkillItem details={each} key={each.id}/>)}
            </ul>
            <h1  className="text-yellow-400 font-bold text-[25px] md:text-[40px] text-center mb-4 mt-[30px] md:mt-[90px]">EXPERIENCE <span className="text-white">&</span> EDUCATION</h1>
            <div className="flex flex-col md:flex-row w-[1200px] mb-8">
                <div>
                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color='warning'/>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className=" flex flex-col justify-center ">
                                    <p className="bg-gray-800 rounded-xl text-white p-2 w-24 md:w-32 text-[10px]">2018 - present</p>
                                    <h1 className="text-lg text-white  md:font-semibold text-[10px] ">Web Developer - <span className="text-md">Envato</span></h1>
                                    <p className="text-sm text-white font-normal text-[10px]">Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:w-full to only apply the w-full utility on hover. </p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        


                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color='warning' />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className=" flex flex-col justify-center ">
                                    <p className="bg-gray-800 rounded-xl text-white p-2 w-32">2018 - present</p>
                                    <h1 className="text-lg text-white font-semibold">Web Developer - <span className="text-md">Envato</span></h1>
                                    <p className="text-sm text-white font-normal">Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:w-full to only apply the w-full utility on hover. </p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        
                    </Timeline>
                </div>
                <div className="mt-[80px] md:mt-0">
                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color='warning' />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className=" flex flex-col justify-center ">
                                    <p className="bg-gray-800 rounded-xl text-white p-2 w-32">2018 - present</p>
                                    <h1 className="text-lg text-white font-semibold">Web Developer - <span className="text-md">Envato</span></h1>
                                    <p className="text-sm text-white font-normal">Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:w-full to only apply the w-full utility on hover. </p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                        


                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot color='warning' />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <div className=" flex flex-col justify-center ">
                                    <p className="bg-gray-800 rounded-xl text-white p-2 w-32">2018 - present</p>
                                    <h1 className="text-lg text-white font-semibold">Web Developer - <span className="text-md">Envato</span></h1>
                                    <p className="text-sm text-white font-normal">Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:w-full to only apply the w-full utility on hover. </p>
                                </div>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </div>
                
            </div>
        </div>
    )
}

export default About