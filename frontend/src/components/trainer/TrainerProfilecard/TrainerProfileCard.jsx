import React from 'react'
import {Link, NavLink, useNavigate} from "react-router-dom"
import "./TrainerProfileCard.scss"
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import emptimg from "../../../images/profile-pic-avather.png"
import {useSelector} from "react-redux"
import Spinner from '../../spinner/Spinner';
function TrainerProfileCard() {
  const navigate=useNavigate()
  const {trainer,isLoading}=useSelector((state)=>state.trainerAuth)
  if(isLoading){
        return <Spinner/>
      }
  return (
          <div className="trainerProfileCard">
                    <div className="top">
                        {trainer.coverimage ?
                <img className='coverpic' src={trainer.coverimage} alt="" />        
               : <img className='coverpic' src={emptimg} alt="" /> }
                              
                              
                    </div>
                    {trainer.profileimage ?
                    <img className='roundpic' src={trainer.profileimage} alt="" /> :
                   
                    <img className='roundpic' src={emptimg} alt="" />
                    }
                    <div className="name">
                    <div className="nametext"><Link to={"/trainer/home/tprofile"} style={{textDecoration:"none" , color:"black"}} >{trainer.name}</Link></div>
                    </div>
                    <div className="bottom">
                              <ul>
                                <Link to={''}></Link>
                                        <li  className='cardtext '><GroupAddIcon className='picon'/><NavLink style={{textDecoration:"none" , color:"black"}} to={"/trainer/home/clients"}>Clients</NavLink> </li>
                                        <li className='cardtext '><FeaturedPlayListIcon className='picon'/><NavLink style={{textDecoration:"none" , color:"black"}} to={"/trainer/home/tplans"}>Plans</NavLink></li>
                                        <li className='cardtext '><ContactPageIcon className='picon'/><NavLink style={{textDecoration:"none" , color:"black"}} to={"/trainer/home/income"}>Income</NavLink></li>
                              </ul>
                              <div className="addpost">
                                      <Link style={{textDecoration:"none"}} to={"/trainer/home/taddpost"}> <button className="addpostbutton primary-Color"><AddBoxOutlinedIcon/>Add Post</button></Link> 
                              </div>
                             
                    </div>
                    
          </div>
  )
}

export default TrainerProfileCard