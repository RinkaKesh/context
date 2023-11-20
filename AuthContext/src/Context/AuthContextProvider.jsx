import React, {createContext, useEffect, useState} from 'react'

export const mycontext = createContext()

export default function AuthContextProvider({children}) {

const [isauth, setAuth] = useState(false)
const [token, settoken] = useState("")
  

  return (
      <mycontext.Provider value={{isauth,setAuth,token,settoken}}>
        {children}
      </mycontext.Provider>
  )
}
