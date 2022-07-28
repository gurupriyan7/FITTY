import React from 'react'
import './UserPaymentScreen.scss'
import { useDispatch, useSelector } from 'react-redux'
import { reset, getSinglePlan } from '../../../features/UserPlans/UserPlanSlice'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
function UserPaymentScreen() {
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getSinglePlan(id))
  }, [])
  const { singleplan } = useSelector((state) => state.userPlan)
  console.log('hello', singleplan)

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
          <div className="card-payment-button">
            <button>Proceed to Payment</button>
          </div>
          <div className="card-cancel-button">
            <Link to={'/home/getplans'}>
              <button>Cancel</button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default UserPaymentScreen
