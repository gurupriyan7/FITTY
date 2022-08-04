import React, { useEffect } from 'react'
import "./Widgets.scss"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
import AssignmentIndSharpIcon from '@mui/icons-material/AssignmentIndSharp';
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getAllData} from "../../../features/adminAuth/AdminSlice"


function Widgets({type}) {
  const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getAllData())
},[])

   const {allData}=useSelector((state)=>state.adminAuth)

          let data;

          switch(type){
                    case "users":
                              data={
                                        title:"USERS",
                                        isMoney:false,
                                        count:allData.user,
                                        link:<NavLink style={{textDecoration:"none",color:"black"}} to='/admin/users'>See all users</NavLink>,
                                        icon:<AccountBoxIcon className='icon primary-Color'/>
                              };
                              break;
                    case "Trainers":
                              data={
                                        title:"TRAINERS",
                                        isMoney:false,
                                        count:allData.trainer,
                                        link:<NavLink style={{textDecoration:"none",color:"black"}} to='/admin/trainers'>See all Trainers</NavLink>,
                                        icon:<AccountCircleOutlinedIcon className='icon primary-Color'/>
                              };
                              break;
                    case "orders":
                              data={
                                        title:"ORDERS",
                                        isMoney:false,
                                        count:allData.order,
                                        icon:<MonetizationOnSharpIcon className='icon primary-Color'/>
                              };
                              break;
                    case "plans":
                              data={
                                        title:"PLANS",
                                        isMoney:false,
                                        count:allData.plan,
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
                    <span className="counter">{data.count} <span style={{fontSize:"15px"}}>Nos</span></span>
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