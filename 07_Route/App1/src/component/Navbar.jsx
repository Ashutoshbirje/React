import React from 'react'   
import "./Navbar.css"
import { Link , NavLink} from 'react-router-dom'

function NavBar() {
  return (
    <div> 
        <ul>
            {/*  With Reload Page */}
            {/* <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Dashboard">Dashboard</a></li> */}

            {/* Without Reload Page */}
            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Dashboard">Dashboard</Link></li> */}

            {/* Addtional functionality */}
            <li><NavLink to="/" className={({isActive})=>isActive ? "active-link":""}>Home</NavLink></li>
            <li><NavLink to="/About" className={({isActive})=>isActive ? "active-link":""}>About</NavLink></li>
            <li><NavLink to="/Dashboard" className={({isActive})=>isActive ? "active-link":""}>Dashboard</NavLink></li>
            <li><NavLink to="/student/:id" className={({isActive})=>isActive ? "active-link":""}>Student</NavLink></li>

        </ul>
    </div>
  )
}

export default NavBar