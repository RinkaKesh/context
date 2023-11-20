import React, { useContext, useState } from 'react'
// import AuthContextProvider from '../Context/AuthContextProvider'
import { mycontext } from '../Context/AuthContextProvider'

export default function Login() {
    
    const [email, setemail ] = useState("")
    const [ password, setpass] = useState('')
    const {isauth,setAuth,token,settoken} = useContext(mycontext)


    async function handlesubmit(){
       
      try {
        let res = await fetch(`https://reqres.in/api/login`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                email,
                password,
            })
        })
      
        const data = await res.json()
        console.log(data);
        if(res.ok){
            setAuth(true)
            settoken(data.token)
        }

      } catch (error) {
        console.log(error);
      }

    }

    

    return (
        <div>
            <form data-testid = "auth_form"  onSubmit={(e)=>
                {e.preventDefault()
                    
                    handlesubmit()}}>
                <input
                    type = "email"
                    data-testid = "email"
                    placeholder = "Enter Email"
                    onChange={(e)=>setemail(e.target.value)}
                />
                <br />
                <input
                    type = "password"
                    data-testid = "password"
                    placeholder = "Enter password"
                    onChange={(e)=>setpass(e.target.value)}
                />
                <br />
                <input type = "submit"/>

            </form>                
        </div>
    )
}
