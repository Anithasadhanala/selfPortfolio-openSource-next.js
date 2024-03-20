
import floatingItemsList  from "../../data/floatingItemsList.js";
import FloatingItem from "../FloatingItem";



const FloatingBar = (props) => {

    const {ItemChanged} = props;

    const floatingItemClicked =(data) =>{
        ItemChanged(data)
    }



    return(

        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 mr-2 md:mr-8">
                <ul className="flex flex-col items-end">
                    {floatingItemsList.map((each)=><FloatingItem key={each.id} details={each} floatingItemClicked={floatingItemClicked}/>)}
                </ul>
        </div>
    )
}


export default FloatingBar