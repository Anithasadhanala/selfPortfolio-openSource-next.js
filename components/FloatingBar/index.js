
import floatingItemsList  from "../../data/floatingItemsList.js";
import FloatingItem from "../FloatingItem";



const FloatingBar = () => {

  

    return(

        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 mr-2 md:mr-8 hidden md:block">
                <ul className="flex flex-col items-end">
                    {floatingItemsList.map((each)=><FloatingItem key={each.id} details={each} />)}
                </ul>
        </div>
    )
}


export default FloatingBar