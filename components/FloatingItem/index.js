import { FaHome } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";


const FloatingItem = props => {
    const {details,floatingItemClicked} = props
    const {name,icon} = details

    const iconFunction = (size)=>{

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

    const floatingBarClicked = () => {
        floatingItemClicked(icon)
    }
    

    return(
        <button onClick={floatingBarClicked} className="relative rounded-full w-12 h-12 overflow-hidden transition-all duration-300 hover:w-32 hover:shadow-lg bg-gray-700 text-white  flex justify-center items-center mb-1">
            {iconFunction(20)}
            <span className="absolute top-0 left-0 w-full h-full flex items-center justify-around bg-yellow-400 text-white transition-all duration-300 opacity-0 hover:opacity-100">
                <p className="text-md font-semibold">{name}</p>
                {iconFunction(18)}
            </span>
        </button>
    )
}

export default FloatingItem