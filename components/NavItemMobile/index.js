import {useContext} from 'react';
import IconRender from "../IconRender";
import { TabsContext } from "@/context/TabsContext";


const NavItemMobile = (props) =>{

    const {details} = props
    const {icon,id} =details
    const {changeTab,tabItemId} = useContext(TabsContext)

    const floatingBarClicked  = ()=>{
        changeTab(id)
    }

    let styling = "p-1"
    if(id==tabItemId) styling="text-yellow-400 p-1"

    return(
        <button onClick={floatingBarClicked} className={styling}>
         <IconRender size={28} icon={icon}/>
    </button>

    )
}

export default NavItemMobile