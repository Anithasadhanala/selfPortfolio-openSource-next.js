"use client"

import React, {createContext, useState} from "react"

export const TabsContext = createContext()


export const Tabsprovider = ({children}) =>{
     const [tabItemId,setTabItemId] = useState(1)
  
     const changeTab = (id) => {
      console.log("BBBBBBBBBBBS")
        setTabItemId(id)
     }

   

     return (
        <TabsContext.Provider value={({tabItemId,changeTab})}>
            <div>{children}</div>
        </TabsContext.Provider>
     )
}

