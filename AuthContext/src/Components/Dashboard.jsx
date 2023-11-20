import React, { useContext } from 'react'
// import AuthContextProvider from '../Context/AuthContextProvider'
import { mycontext } from '../Context/AuthContextProvider'

export const Dashboard = () => {
    const {token,setAuth} = useContext(mycontext)

    return (
        <div >
            <h3 data-testid = "token" >Token: {token}</h3>
            <button data-testid = "logout" onClick={()=>setAuth(false)}>LOGOUT</button>
        </div>
    )
}
