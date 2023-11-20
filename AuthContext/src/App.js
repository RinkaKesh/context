import React, { useContext } from 'react'
import Login from './Components/Login'
import { Dashboard } from './Components/Dashboard'
import { mycontext } from './Context/AuthContextProvider'
export default function App() {
  const {isauth} = useContext(mycontext)


  return (
    <div>
        {isauth?<Dashboard/>:<Login/>}
    </div>
  )
}
