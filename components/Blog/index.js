import { blogsList } from "@/data/blogsList";
import InitiativesItem from "../InitiativesItem"
import MobileNavbar from '@/components/NavbarMobile';

const Blog = () =>{
    return(
        <div className="bg-black min-h-screen w-screen flex flex-col justify-center items-center pt-[100px] pb-[100px]">
            <MobileNavbar/>
            <h1 className="text-yellow-400 font-bold text-[25px] md:text-[40px] mb-4"><span className="text-white">MY</span>  BLOGS</h1>

            <ul className="">

                {
                    blogsList.map((each)=> <InitiativesItem details={each} key={each.id}/>)
                }



               
            </ul>
        </div>
    )
}

export default Blog