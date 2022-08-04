import React from 'react'
import './UserPaymentScreen.scss'
import axios from 'axios'
import {API} from "../../../API/User"
import { useDispatch, useSelector } from 'react-redux'
import { reset, getSinglePlan } from '../../../features/UserPlans/UserPlanSlice'
// import { singleTrainer } from '../../../features/featchTrainers/FeatchTrainersSlice'
import { useEffect } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import { useState } from 'react'
import Spinner from '../../spinner/Spinner'
function UserPaymentScreen() {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const { id } = useParams()

  const { singleplan,isLoading } = useSelector((state) => state.userPlan)
  const {user}=useSelector((state)=>state.auth)
 
    useEffect(() => {
      dispatch(getSinglePlan(id))
      
    }, [])
  

  // Load-razorpay
  const loadRazorpay = async()=>{
    const script = document.createElement("script")
    script.src ="https://checkout.razorpay.com/v1/checkout.js"
    script.onerror=()=>{
      alert("Razorpay SDK failed to load .Are you online?")
    };
    script.onload= async()=>{
      try {
       
        const result = await API.post("/create-order",{
          amount:singleplan.planAmount+"00" ,
        })
        const { amount ,id:order_id,currency} = result.data;
        const {data:{key:razorpaykey},
      }=await API.get("/get-razorpay-key")
      const options = {
        key:razorpaykey,
        amount:amount.toString(),
        currency:currency,
        name:"fitty",
        description:`plan${singleplan.planName}`,
        order_id:order_id,
        handler:async function(response){
          const result = await API.post("/pay-order",{
            amount:amount,
            trainer:singleplan?.postedBy?._id,
            plan:singleplan._id,
            user:user._id,
            razorpayPaymentId:response.razorpay_payment_id,
            razorpayOrderId:response.razorpay_order_id,
            razorpaysignature:response.razorpay_signature,
          });
          
          toast.success("Payment was Successfull")
          navigate('/home/myplans')
          
        
        },
        prefill:{
          name:"FITTY",
          email:"fittyofficial@gmail.com",
          contact:"9074306855",
        },
        notes:{
          address:"fitty"
        },
        theme:{
          color:"#80c0f0"
        }
      }
      const paymentObject = new window.Razorpay(options)
      paymentObject.open();
      } catch (error) {
        console.log("error",error);

      }
    }
    document.body.appendChild(script)
  }
  const userId = user._id
  if(isLoading){
    return <Spinner/>
  }
  return (
    <>
    <div className="payment">
      <div className="card-payment">
        <div className="card-header">
          <img src={singleplan.image} alt="" />
        </div>
        <div className="card-body">
          <div className="card-title primary-Color">{singleplan.planName}</div>
          <div className="card-text">{singleplan.description}</div>
          <div className="card-plan">
            <div className="card-plan-img">
              <ShoppingCartRoundedIcon />
            </div>
            <div className="card-plan-text">
              <div className="card-plan-title">
                Trainer : {singleplan?.postedBy?.name}
              </div>
              <div className="card-plan-price">
                ₹{singleplan.planAmount}/month
              </div>
            </div>
            <div className="card-plan-link"></div>
          </div>
            {singleplan.purchasedBy?.includes(userId) ? 
            <div className="card-payment-button">

              <button >You Alredy Purchsed</button>
            </div>
            :
          <div className="card-payment-button">
            {singleplan?.postedBy?.slots ?  <button onClick={loadRazorpay}>Proceed to Payment</button> :
            <button >No Slots Available</button>
            }
          </div>
            }
          <div className="card-cancel-button">
            <Link to={'/home/getplans'}>
              <button>Back</button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default UserPaymentScreen
