import { FaHome } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";



const IconRender = (props)=>{

    const {size,icon} = props

    const styling = `h-[${size}px] w-[${size}px]`
    switch(icon){
        case "FaHome" : 
            return <FaHome className={styling}/>
        case "RiContactsFill":
            return <RiContactsFill className={styling}/>
        case "FaEnvelope":
            return <FaEnvelope className={styling}/>
        case "FaPencilAlt":
            return <FaPencilAlt className={styling}/>
        case "IoNewspaper":
            return <IoNewspaper className={styling}/>
        default:
            return ""
    }
}


export default IconRender