import {useContext} from 'react';
import IconRender from "../IconRender";
import { TabsContext } from "@/context/TabsContext";


// Each mobile navbar Item renders this compoenent
const NavItemMobile = (props) =>{

    const {details} = props
    const {icon,id} =details
    const {changeTab,tabItemId} = useContext(TabsContext)

    const floatingBarClicked  = ()=>{
        changeTab(id)
    }

    let styling = ""
    if(id==tabItemId) styling="text-yellow-400 "

    return(
        <button onClick={floatingBarClicked} className={styling}>
         <IconRender size={29} icon={icon}/>
    </button>

    )
}

export default NavItemMobile