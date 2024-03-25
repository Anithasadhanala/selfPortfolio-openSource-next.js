import {TimelineItem,TimelineSeparator,TimelineConnector,TimelineContent,TimelineDot,} from '@mui/lab'

const TimelineSingleItem = () =>{
    
    return(
        <TimelineItem>
        <TimelineSeparator>
            <TimelineDot color='warning' />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <div className=" flex flex-col justify-center ">
                <p className="bg-gray-800 rounded-xl text-white p-2 w-32">2018 - present</p>
                <h1 className="text-lg text-white font-normal md:font-semibold">Web Developer | <span className="text-md">Envato</span></h1>
                <p className="text-sm text-white  font-thin md:font-normal">Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:w-full to only apply the w-full utility on hover. </p>
            </div>
        </TimelineContent>
    </TimelineItem>
    )
}

export default TimelineSingleItem