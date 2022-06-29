import React from 'react'
import "./Widgets.scss"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
import AssignmentIndSharpIcon from '@mui/icons-material/AssignmentIndSharp';
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';


function Widgets({type}) {

          let data;

          switch(type){
                    case "users":
                              data={
                                        title:"USERS",
                                        isMoney:false,
                                        link:"See all users",
                                        icon:<AccountBoxIcon className='icon primary-Color'/>
                              };
                              break;
                    case "Trainers":
                              data={
                                        title:"TRAINERS",
                                        isMoney:false,
                                        link:"See all Trainers",
                                        icon:<AccountCircleOutlinedIcon className='icon primary-Color'/>
                              };
                              break;
                    case "sails":
                              data={
                                        title:"SALES",
                                        isMoney:true,
                                        link:"See Total sails",
                                        icon:<MonetizationOnSharpIcon className='icon primary-Color'/>
                              };
                              break;
                    case "plans":
                              data={
                                        title:"PLANS",
                                        isMoney:false,
                                        link:"See all plans",
                                        icon:<FeaturedPlayListIcon className='icon primary-Color'/>
                              };
                              break;
                              default:
                              break;

          }
  return (

        
    <div className='widget'>
          <div className="left">
                    <span className="title primary-Color">{data.title}</span>
                    <span className="counter">{data.isMoney && "₹"}1234</span>
                    <span className="link">{data.link}</span>
          </div>
          <div className="right">
                    <div className="percentage">
                    {data.icon}
                    </div>
          </div>
    </div>
  )
}

export default Widgets