import React from 'react'
import {Link, useNavigate} from "react-router-dom"
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
                    <div className="nametext">Gurupriyan</div>
                    </div>
                    <div className="bottom">
                              <ul>
                                <Link to={''}></Link>
                                        <li  className='cardtext clients'><GroupAddIcon className='picon'/><Link style={{textDecoration:"none" , color:"black"}} to={"clients"}>Clients</Link> </li>
                                        <li className='cardtext plans'><FeaturedPlayListIcon className='picon'/><Link style={{textDecoration:"none" , color:"black"}} to={"tplans"}>Plans</Link></li>
                                        <li className='cardtext income'><ContactPageIcon className='picon'/>Income</li>
                              </ul>
                              <div className="addpost">
                                      <Link style={{textDecoration:"none"}} to={"taddpost"}> <button className="addpostbutton primary-Color"><AddBoxOutlinedIcon/>Add Post</button></Link> 
                              </div>
                             
                    </div>
                    
          </div>
  )
}

export default TrainerProfileCard