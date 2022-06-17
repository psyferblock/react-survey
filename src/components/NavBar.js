import React from 'react'
import NavBarAdmin from './NavBarAdmin'
import NavBarUser from './NavBarUser'

export default function NavBar() {
  return (
    <>
        <div className="nav-bar">
            <h3>Welcome to Survey.app</h3>
            <ul>
                <NavBarAdmin/>
                <NavBarUser/>

            </ul>
        </div>
    </>
  )
}
