import ContactIcon from "../ContactIcon"
import MobileNavbar from '@/components/NavbarMobile';
import { contactDetails } from "@/data/contactDetails";

const Contact = () =>{


    return(
        <div className="bg-black min-h-screen w-screen h-screen flex flex-col justify-center items-center overflow-x-hidden  ">
            <MobileNavbar/>
            <h1 className="text-yellow-400 font-bold   text-[30px] md:text-[40px] mb-4"><span className="text-white">Let's</span>  CONNECT</h1>
            <p className="text-white font-semibold text-[12px]md:text-[20px]">{contactDetails[0].email}</p>
            <ul className="flex mt-[50px] w-screen flex-wrap justify-center">
            
                {
                    contactDetails[0].platforms.map((each)=><ContactIcon details={each} key={each.id}/>)
                }


            </ul>
            

        </div>
    )
}

export default Contact