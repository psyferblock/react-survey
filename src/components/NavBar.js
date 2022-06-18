import React from 'react'
import '../App.css';

import NavBarAdmin from '../components/NavBarAdmin';
import NavBarUser from '../components/NavBarUser';
import Questions from '../components/Questions';
import Main from '../components/Main'



export default function NavBar() {


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
                       <button onClick={()=>{getNavbar(<NavBarUser/>)}}> user survey</button> 
                    </li>
                    <li><button onClick={()=>{getNavbar(<NavBarAdmin/>)}}>admin </button></li>
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
