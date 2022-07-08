import React from 'react'
import "./TrainerProfileCard.scss"
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
function TrainerProfileCard() {
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
                                        <li className='cardtext'><GroupAddIcon className='picon'/>Clients</li>
                                        <li className='cardtext'><FeaturedPlayListIcon className='picon'/>Plans</li>
                                        <li className='cardtext'><ContactPageIcon className='picon'/>Income</li>
                              </ul>
                              <div className="addpost">
                                        <button className="addpostbutton primary-Color"><AddBoxOutlinedIcon/>Add Post</button>
                              </div>
                             
                    </div>
                    
          </div>
  )
}

export default TrainerProfileCard