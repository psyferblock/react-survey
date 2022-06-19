import React ,{useState,useEffect} from 'react'
import '../App.css';
import Questions from './Questions';



export default function NavBarAdmin() {
  
    const [email,setEmail]=useState({})
    const [password,setPassword]=useState({})

          
    const adminLogin = async ()=>{
            const url ="http://127.0.0.1:8000/v1/admin/login"
            const task ={"email":email,"password":password}
            const res =await fetch (url),{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(task)
                }
            
            const data =await res.json()
            if (data["token"]){
                localStorage.setItem("token",data["token"]);
                window.location.href="/main"
            }else{
                alert("wrong email/password")
            }
            <Main/>
            return data
            // then we will go to the main page for admin to set up
            
       
        } 
    

    // checkData()

  return (  
    <div>
        <nav>
        <input onChange={e=>setEmail(e.target.value)} type="text" className="form-input" placeholder="email"/>
        <input onChange={e=>setPassword(e.target.value)} type="password" className="form-input" placeholder="password"/>
        <button onClick={adminLogin}>submit</button>
        </nav>
        
        
    <div>
    </div>
    </div>
  )
}
