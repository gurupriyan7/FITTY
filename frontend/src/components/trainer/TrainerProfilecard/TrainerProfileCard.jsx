import React from 'react'
import {Link, NavLink, useNavigate} from "react-router-dom"
import "./TrainerProfileCard.scss"
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
function TrainerProfileCard() {
  const navigate=useNavigate()
  return (
          <div className="trainerProfileCard">
                    <div className="top">
                              <img className='coverpic' src="https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg" alt="" />
                    </div>
                    <img className='roundpic' src="https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg" alt="" />
                    <div className="name">
                    <div className="nametext"><Link to={"tprofile"} style={{textDecoration:"none" , color:"black"}} >Gurupriyan</Link></div>
                    </div>
                    <div className="bottom">
                              <ul>
                                <Link to={''}></Link>
                                        <li  className='cardtext '><GroupAddIcon className='picon'/><NavLink style={{textDecoration:"none" , color:"black"}} to={"clients"}>Clients</NavLink> </li>
                                        <li className='cardtext '><FeaturedPlayListIcon className='picon'/><NavLink style={{textDecoration:"none" , color:"black"}} to={"tplans"}>Plans</NavLink></li>
                                        <li className='cardtext '><ContactPageIcon className='picon'/>Income</li>
                              </ul>
                              <div className="addpost">
                                      <Link style={{textDecoration:"none"}} to={"taddpost"}> <button className="addpostbutton primary-Color"><AddBoxOutlinedIcon/>Add Post</button></Link> 
                              </div>
                             
                    </div>
                    
          </div>
  )
}

export default TrainerProfileCard