import React from 'react'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';
import FactCheckSharpIcon from '@mui/icons-material/FactCheckSharp';
import './UserHomeProfileScreen.scss'
import { useNavigate } from 'react-router-dom';

function UserHomeProfileScreen() {
  const navigate= useNavigate()
  return (
    <div className="userProfileCard">
    <div className="top">
              <img className='coverpic' src="https://scontent.fcok8-1.fna.fbcdn.net/v/t39.30808-6/250713542_1729340387456304_9196444806310970091_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=xWPjign34TcAX9l2wnD&_nc_oc=AQkzzOY90Cg7AFeHwG0pJgloJHN0G3T5tLLwZJWQuPXFxe9UqprEtns5w0Gfu-dnwLU&_nc_ht=scontent.fcok8-1.fna&oh=00_AT_0ZPuAcflWLgFtZm3gSurSmjU5ExL9hd-DjDtpdwPuzw&oe=62C990AB" alt="" />
    </div>
    <img className='roundpic' src="https://scontent.fcok8-1.fna.fbcdn.net/v/t1.6435-9/82549164_1189955858061429_8521194662629736448_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=qIdwnaniLLoAX-DiBGy&tn=CpgIrfUW4Ca1UxJB&_nc_ht=scontent.fcok8-1.fna&oh=00_AT9VDCtaIvmdOOI2676HJVlpjFMdeV44ZlQTMydBdrhfPA&oe=62EAD2B7" alt="" />
    <div className="name">
    <div className="nametext">Gurupriyan</div>
    </div>
    <div className="bottom">
              <ul>
                        <li onClick={()=>navigate("/getacoach")} className='cardtext getacoach'><GroupAddIcon className='picon'/>Get a Coach</li>
                        <li onClick={()=>navigate("/getplans")}className='cardtext getplans'><FeaturedPlayListIcon className='picon'/> Get Plans</li>
                        <li onClick={()=>navigate("/myplans")}className='cardtext myplans'><FactCheckSharpIcon className='picon'/>My Plans</li>
              </ul>
              <div className="addpost">
                        <button className="addpostbutton primary-Color"><AddBoxOutlinedIcon/>Add Post</button>
              </div>
             
    </div>
    
</div>
    
  )
}

export default UserHomeProfileScreen
