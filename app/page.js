"use client"

import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import FloatingBar from '@/components/FloatingBar';
import Home from '@/components/Home';
import Portfolio from '@/components/Portfolio';
import  floatingItemsList  from '@/data/floatingItemsList';

import {useState} from "react"


const App =()=> {



  const [floatItem,setFloatItem] = useState("FaHome")


  const ItemChanged = (data)=>{
    setFloatItem(data)
  }

  const diaplayFunction = ()=>{
    switch(floatItem){
      case "FaHome" : 
          return <Home/>
      case "RiContactsFill":
          return <About/>
      case "FaEnvelope":
          return <Contact/>
      case "FaPencilAlt":
          return <Blog/>
      case "IoNewspaper":
          return <Portfolio/>
      default:
          return ""
    }
  }


  return (
    <div className="min-h-screen overflow-y-auto">
      {diaplayFunction()}
      <FloatingBar ItemChanged={ItemChanged}/>
    </div>
  );
}

export default App;
