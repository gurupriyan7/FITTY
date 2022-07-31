import React, { useEffect } from 'react'
import './GetPlansScreen.scss'
import {getAllPlans,reset} from "../../../features/UserPlans/UserPlanSlice"
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import Spinner from '../../spinner/Spinner'

function GetPlansScreen() {
  const dispatch = useDispatch()
  const {allPlans,isLoading} = useSelector((state)=>state.userPlan)
  useEffect(()=>{
    dispatch(getAllPlans())
  },[])
  if(isLoading){
    return <Spinner/>
  }
  return (
    <div className="container">
      <div className="row">
        {/* getplans-card */}
        {allPlans.length ? allPlans.map((plan)=>(
          <>
          <div className="col-md-4 getplansscreen primary-backgroundColor">
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
            <div className="coached">
              <p className="coachedcount">Weekly {plan.days} days Workout</p>
            </div>
            <div className="slots">
              <p className="slotsavailable primary-Color">{plan.postedBy.name}</p>
            </div>
            <div className="enrol">
            <Link to={`/home/payment/${plan._id}`}><button className="enrolbtn">Join Now</button></Link>
            </div>
          </div>
        </div>
          </>
        )) : "no posts"}
        
        {/* getplans-card */}
      
      </div>
    </div>
  )
}

export default GetPlansScreen
