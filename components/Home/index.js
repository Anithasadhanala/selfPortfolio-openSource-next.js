import bg from "../../public/homeBg.png"
import porfolio from "../../public/anitha.png"
import { IoArrowForwardCircle } from "react-icons/io5";


const Home = () => {
return(
    <div style={{
        backgroundImage: `url(${bg.src})`,
        width: '100%',
        height: '100%',
      }} className="flex flex-row justify-between w-100 items-center">
        
        <div className="bg-gray-900 h-[500px] w-[500px] rounded-3xl ml-8 shadow-2xl  shadow-gray-900">
          <img className="h-[500px] w-[750px] rounded-2xl" src={porfolio.src} alt="myself"/> 
        </div>

        <div className="flex flex-col justify-center items-center  w-[900px] h-[600px]">
          <h1 className="text-yellow-400 font-bold text-[40px] ">&#x2010;   &nbsp; I'M ANITHA.</h1>
          <p className="text-white font-bold text-[35px] mb-1">WEB DEVELOPER</p>
          <p className=" text-white mt-3 mb-6 text-center  w-[500px]">I’m developer and problem solver from India with high passion of creating softwares That looks and works great. I am passionate about the solving the real world problems ensuring all the possible testcases.</p>
          <button  className="text-white border-2 border-yellow-400 rounded-2xl p-3 flex justify-center items-center" type="button">Know More About Me <span><IoArrowForwardCircle className="ml-2 h-[30px] w-[30px] text-yellow-400"/></span></button>
        </div>
    </div>
)
}


export default Home