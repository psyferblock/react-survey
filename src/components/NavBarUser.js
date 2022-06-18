import React from 'react';
import '../App.css';


export default function NavBarUser() {
    function userSubmit(){
        console.log("user has spoken")
    }
  return (
    <>
    <input type="text" placeholder="name "/>
    <input type="text" placeholder="email "/>
    <button onClick={userSubmit}>submit</button>
     
    
    </>
  )
}
