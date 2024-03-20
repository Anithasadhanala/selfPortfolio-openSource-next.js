import ContactIcon from "../ContactIcon"

const Contact = () =>{


    return(
        <div className="bg-black min-h-screen w-screen flex flex-col justify-center items-center pt-[100px] pb-[100px]">
            <h1 className="text-yellow-400 font-bold   text-[40px] mb-4"><span className="text-white">Let's</span>  CONNECT</h1>
            <p className="text-white font-semibold text-[20px]">anithasaisadhanala@gmail.com</p>
            <ul className="flex mt-[50px]">
            <ContactIcon/>
            <ContactIcon/>
            <ContactIcon/>
            </ul>
            

        </div>
    )
}

export default Contact