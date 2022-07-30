import React from 'react'
import "./MyPlansScreen.scss"
import {getUserOwnPlans} from "../../../features/UserPlans/UserPlanSlice"
import {useDispatch,useSelector} from "react-redux"
import { useEffect } from 'react'
import { useState } from 'react'
function MyPlansScreen() {
  const dispatch = useDispatch()

  const {userOwnPlans,isLoading} =useSelector((state)=>state.userPlan)
const [load,setLoad] =useState(false)
  useEffect(()=>{
    dispatch(getUserOwnPlans())
  },[])
  useEffect(()=>{
if(isLoading){
  setLoad(true)
}
  },[isLoading])
  console.log("planssssss",userOwnPlans);
  
  if(load){
    <h4>Loading.....</h4>
  }
  return (
    <div className="container">
      <div className="row">
        {/* getplans-card */}
        {userOwnPlans.length ? userOwnPlans.map((plan)=>(

        <>
        <div className="col-md-4 Myplansscreen primary-backgroundColor">
          <div className="top">
            <div className="tname">
              <div className="ttext primary-Color">{plan.planName}</div>
            </div>
            <img
              src={plan.image}
              alt=""
              className="trainercardimg"
            />
          </div>
          <div className="bottom">
            <div className="cat">
              <div className="category primary-backgroundColor">
                <p>₹{plan.planAmount}/month</p>
              </div>
            </div>
            <div className="completed">
              <p className="dayscount">Weekly {plan.days} days workout</p>
            </div>
            <div className="slots">
              <p className="slotsavailable primary-Color">{plan?.postedBy?.name}</p>
            </div>
            <div className="enrol">
              <button className="enrolbtn">Start Now</button>
            </div>
          </div>
        </div>
        </>
        )) : <h1>no plan</h1>}
        {/* getplans-card */}
       
      </div>
    </div>
  )
}

export default MyPlansScreen
