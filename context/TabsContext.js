"use client"

import React, {createContext, useState} from "react"

// context component
export const TabsContext = createContext()


// provider component
export const Tabsprovider = ({children}) =>{
     const [tabItemId,setTabItemId] = useState(1)
  
     const changeTab = (id) => {
        setTabItemId(id)
     }

     return (
        <TabsContext.Provider value={({tabItemId,changeTab})}>
            <div>{children}</div>
        </TabsContext.Provider>
     )
}

