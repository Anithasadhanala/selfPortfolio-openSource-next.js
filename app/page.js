"use client"

import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import FloatingBar from '@/components/FloatingBar';
import Home from '@/components/Home';
import Portfolio from '@/components/Portfolio';
import { TabsContext } from '@/context/TabsContext';
import {useContext} from 'react';


const App =()=> {

  const {tabItemId} = useContext(TabsContext)
  const ItemChanged = (data)=>{
    setFloatItem(data)
  }

  const diaplayFunction = ()=>{

    switch(tabItemId){
      case 1: 
          return <Home/>
      case 2:
          return <About/>
      case 4:
          return <Contact/>
      case 5:
          return <Blog/>
      case 3:
          return <Portfolio/>
      default:
          return ""
    }
  }


  return (
    <div className="min-h-screen overflow-y-auto  overflow-x-hidden">
      {diaplayFunction()}
      <FloatingBar ItemChanged={ItemChanged}/>
    </div>
  );
}

export default App;
