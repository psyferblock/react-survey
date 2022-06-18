import React from 'react'
import '../App.css';
import Questions from './Questions';


export default function NavBarAdmin() {
  
    function adminClick(){
        console.log("admin! i choose you!!!!")
    }

  return (  
    <div>
        <nav>
        <input type="text" placeholder="name "/>
        <input type="text" placeholder="email "/>
        <button onClick={adminClick}>submit</button>
        </nav>
        
        
    <div>
    <Questions/>
    </div>
    </div>
  )
}
