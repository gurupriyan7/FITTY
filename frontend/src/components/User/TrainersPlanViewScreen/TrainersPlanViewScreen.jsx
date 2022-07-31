import React from 'react'
import { Link, useParams } from 'react-router-dom'
import "./TrainersPlanViewScreen.scss"
import emptyimg from "../../../images/no_img.svg"
import {useDispatch,useSelector} from "react-redux"
import {getSingleTrainerPlans,reset} from "../../../features/UserPlans/UserPlanSlice"
import { useEffect } from 'react'
import Spinner from '../../spinner/Spinner'
function TrainersPlanViewScreen({value}) {
  const dispatch = useDispatch()
  const {trainerPlans,isLoading} = useSelector((state)=>state.userPlan)
const {id}= useParams()
  useEffect(()=>{
    dispatch(getSingleTrainerPlans(id))
  },[])
  if(isLoading){
    return <Spinner/>
  }
  return (
          <div className="container">
          <div className="row">
            {/* getplans-card */}  
            {trainerPlans.length ? trainerPlans.map((trainerPlans)=>(

            <div className="col-md-4 tplansscreen primary-backgroundColor">
          <div className="top">
            <div className="tname">
              <div className="ttext primary-Color">{trainerPlans.planName}</div>
            </div>
            <img
              src={trainerPlans.image}
              alt=""
              className="trainercardimg"
            />
          </div>
          <div className="bottom">
            <div className="cat">
              <div className="category primary-backgroundColor">
                <p>₹{trainerPlans.planAmount}/month</p>
              </div>
            </div>
            <div className="coached">
              <p className="coachedcount">Weekly {trainerPlans.days} days Workout</p>
            </div>
            <div className="slots">
              <p className="slotsavailable primary-Color">{trainerPlans?.postedBy?.name}</p>
            </div>
            <div className="enrol">
            <Link to={`/home/payment/${trainerPlans._id}`}><button className="enrolbtn">Join Now</button></Link>
            </div>
          </div>
        </div>
            )) : 
            <div className="emptyPosttp">
            <img src={emptyimg} alt="" className="emptyimg" />
            <p className="emptyimgtext">No plans found</p>
            
            
            </div>}
              {/* getplans-card */}
           
           
          </div>
        </div>
  )
}

export default TrainersPlanViewScreen
