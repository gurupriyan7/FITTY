import React from 'react'
import { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import './GetACoachScreen.scss'
import {AllTrainers,reset} from "../../../features/featchTrainers/FeatchTrainersSlice"

import { useNavigate,Link } from 'react-router-dom'
import Spinner from '../../spinner/Spinner'
function GetACoachScreen() {

  const dispatch =  useDispatch()
  const navigate = useNavigate()
  const {trainers,isLoading,isError}=useSelector((state)=>state.featchAllTrainers)
  console.log('all',trainers);
  useEffect(()=>{

    dispatch(AllTrainers())
  },[dispatch])
  if(isLoading){
    return <Spinner/>
  }
  return (
    <div className="container">
      <div className="row">
        
        {/* getacoach-card */}
        {trainers ? trainers.map((data)=>(
        <div className="col-md-4 getacoachscreen">
        <div className="top">
          <div className="tname">
            <div className="ttext primary-Color">{data.name}</div>
          </div>
          <img
            src={data.profileimage}
            alt=""
            className="trainercardimg"
          />
        </div>
        <div className="bottom">
          <div className="cat">
            <div className="category primary-backgroundColor">
              <p>{data.category}</p>
            </div>
          </div>
          <div className="coached">
            {data.coached > 0  ? <p className="coachedcount">Coached {data.coached} Peoples</p>
            : <p className="coachedcount">New Coach</p>}
            
          </div>
          <div className="slots">
            {data.slots ?  <p className="slotsavailable primary-Color">{data.slots} Slots Available</p>
            : <p className="slotsavailable primary-Color">No Slots Available</p> }
           
          </div>
          <div className="enrol">
            {data.slots ?<Link to={`/home/coach/${data._id}`}><button   className="enrolbtn">Enrol</button></Link> 
            : <button className="enrolbtn">No Slots</button>}
            
          </div>
        </div>
      </div>
        )) : ""}

        {/* get a coach-card */}
       
      </div>
    </div>
  )
}

export default GetACoachScreen
