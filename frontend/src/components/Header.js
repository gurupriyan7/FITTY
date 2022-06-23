
import {Button} from "react-bootstrap"

import {NavLink} from "react-router-dom"
import React from 'react'
import '../javascript/user/Header.js'
import '../../stylesheets/Headder.css'

function Header() {
  return (
    <>
              
          <navbar className='main'>
          <div className="navbar display-flex  position-fixed" style={{zIndex:"9",boxShadow:"revert-layer"}}>
                    <NavLink style={{textDecoration:"none"}} to='/'><span className="LOGO">FITTY</span></NavLink>
                   <NavLink to='/login'><Button  className="loginButton">Login</Button></NavLink> 

{/* scroll-inticater */}
<div className="progress-container">
    <div className="progress-bar" id="myBar"></div>
 </div>
          </div>

          </navbar>
    </>
    
  )
}

export default Header
