import { TabsContext } from "@/context/TabsContext";
import IconRender from "../IconRender";
import {useContext} from 'react';


// Each floating Item renders this for rendering the Icon in desktop
const FloatingItem = props => {
    const {details} = props
    const {name,icon,id} = details
    const {changeTab,tabItemId} = useContext(TabsContext)

    const floatingBarClicked = () => {
        changeTab(id)
    }

    let styling = "relative rounded-full w-12 h-12 overflow-hidden transition-all duration-300 hover:w-32 hover:shadow-lg bg-gray-700 text-white  flex justify-center items-center mb-1"
    if(id==tabItemId) styling = "relative rounded-full w-12 h-12 overflow-hidden transition-all duration-300 hover:w-32 hover:shadow-lg text-white  flex justify-center items-center mb-1"+" bg-yellow-400"

    return(
        <button onClick={floatingBarClicked} className={styling}>
            <IconRender size={20} icon={icon}/>
            <span className="absolute top-0 left-0 w-full h-full flex items-center justify-around bg-yellow-400 text-white transition-all duration-300 opacity-0 hover:opacity-100">
                <p className="text-md font-semibold">{name}</p>
                <IconRender size={18} icon={icon}/>
            </span>
        </button>
    )
}
 
export default FloatingItem