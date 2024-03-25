import ContactIcon from "../ContactIcon"
import MobileNavbar from '@/components/NavbarMobile';

const Contact = () =>{


    return(
        <div className="bg-black min-h-screen w-screen flex flex-col justify-center items-center pt-[100px] pb-[100px]">
            <MobileNavbar/>
            <h1 className="text-yellow-400 font-bold   text-[25px] md:text-[40px] mb-4"><span className="text-white">Let's</span>  CONNECT</h1>
            <p className="text-white font-semibold text-[12px]md:text-[20px]">anithasaisadhanala@gmail.com</p>
            <ul className="flex mt-[50px] w-screen flex-wrap justify-center">
            <ContactIcon/>
            <ContactIcon/>
            <ContactIcon/>
            <ContactIcon/>
            <ContactIcon/>
            <ContactIcon/>
            </ul>
            

        </div>
    )
}

export default Contact