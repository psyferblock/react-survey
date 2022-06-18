import React from 'react'
import '../App.css';

import NavBarAdmin from './NavBarAdmin'
import NavBarUser from './NavBarUser'
import Questions from './Questions';

import { useState } from 'react';

export default function NavBar() {


    const [navBar,getNavbar] =useState()

   

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
        <div className="main-body">
            
            <div>
                <ul>
                <input>question</input>
                <input>answer option</input>
                <input>answer option</input>
                <input>answer option</input>
                <input>answer option</input>

                <button>submit</button>
                </ul>
            </div>

        </div>
    </>
  )
}
