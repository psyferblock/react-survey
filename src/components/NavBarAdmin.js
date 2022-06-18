import React ,{useState,useEffect} from 'react'
import '../App.css';
import Questions from './Questions';



export default function NavBarAdmin() {
  
    const [email,setEmail]=useState({})
    const [password,setPassword]=useState({})

          
    const adminLogin = async ()=>{
           

       
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
