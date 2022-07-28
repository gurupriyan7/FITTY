import React from 'react'
import { Link } from 'react-router-dom'
import './TrainerPlansScreen.scss'
import {useDispatch,useSelector} from "react-redux"
import {getTrainerPlan,reset} from "../../../features/TrainerPlans/TrainerPlanSlice"
import { useEffect } from 'react'
import emptyimg from "../../../images/no_img.svg"
function TrainerPlansScreen() {
  const  dispatch = useDispatch()
 const user = localStorage.getItem("user")
 const id = user._id
  const {trainerPlans,isLoading,isError,message} = useSelector((state)=>state.trainerPlan)

  useEffect(()=>{
    dispatch(getTrainerPlan(id))
  },[])
  console.log("plansss",trainerPlans);
  return (
    <div className="container">
      <div className="row">
        <div className="addbtndiv col-12">
          <Link to={"/trainer/home/addplan"}><button className="addbtn">Add Plans</button></Link>
          
        </div>
        {/* getplans-card */}
        {trainerPlans.length ? trainerPlans.map((plan)=>(
<>
        <div className="col-md-4 tplansscreen primary-backgroundColor">
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
            <Link to={`/trainer/home/singleplan/${plan._id}`}><button className="enrolbtn">View</button></Link>
            </div>
          </div>
        </div>
        </>
        )) : 
        <div className="emptyPost">
          <img src={emptyimg} alt="" className="emptyimg" />
          <p className="emptyimgtext">No plans found</p>
        </div>
        }
        {/* getplans-card */}
       
      </div>
    </div>
  )
}

export default TrainerPlansScreen
