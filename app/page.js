"use client"

import About from '@/components/About';
import FloatingBar from '@/components/FloatingBar';
import Home from '@/components/Home';
import  floatingItemsList  from '@/data/floatingItemsList';

import {useState} from "react"



const App =()=> {

  const [floatItem,setFloatItem] = useState(floatingItemsList[0].id)
  return (
    <div className="min-h-screen overflow-y-auto">
      <About/>
      <FloatingBar/>
    </div>
  );
}

export default App;
