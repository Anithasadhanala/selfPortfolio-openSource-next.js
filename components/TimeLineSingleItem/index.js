import {TimelineItem,TimelineSeparator,TimelineConnector,TimelineContent,TimelineDot,} from '@mui/lab'

const TimelineSingleItem = (props) =>{

    const {details}= props
    const {date,subject,organisation,description} = details
    
    return(
        <TimelineItem>
        <TimelineSeparator>
            <TimelineDot color='warning' />
            <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <div className=" flex flex-col justify-center  w-[600px] md:w-11/12 ">
                <p className="bg-gray-800 rounded-xl text-white p-2 w-32">{date}</p>
                <h1 className="text-lg text-white w-[200px] font-normal md:font-semibold">{subject} | <span className="text-md">{organisation}</span></h1>
                <p className="text-sm text-white w-11/12  font-thin md:font-normal">{description} </p>
            </div>
        </TimelineContent>
    </TimelineItem>
    )
}

export default TimelineSingleItem