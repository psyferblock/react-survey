import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

import NavBarAdmin from '../components/NavBarAdmin';
import NavBarUser from '../components/NavBarUser';
import Questions from '../components/Questions';
import Main from '../components/Main'



export default function NavBar() {
let navigate=useNavigate(); 

    const [navBar,getNavbar] =React.useState("something dude")
    console.log(React.useState())
        console.log(navBar)

   

  return (
    <>
        <header className="nav-bar">

            <h3>Welcome to Survey.app</h3>
            <div >       
                <ul className="nav-ul">
                    <li>
                       <button onClick={()=>{navigate("/user-page")}}> user survey</button> 
                    </li>
                    <li><button onClick={()=>{navigate("/admin-page")}}>admin </button></li>
                    <li>
                        <button>submit</button>
                    </li>     
                </ul>
            </div>

        </header>
        <Main/>

        
    </>
  )
}
