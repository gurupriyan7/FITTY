


import React from 'react'
import "./TrainerSinglePlanScreen.scss"
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getSinglePlan,deletePlans,reset } from '../../../features/TrainerPlans/TrainerPlanSlice'
import { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import Spinner from "../../../components/spinner/Spinner"
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function TrainerSinglePlanScreen() {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { singlePlan,isDelete,isLoading} = useSelector((state) => state.trainerPlan)
  const { id } = useParams()
  useEffect(() => {
    console.log("kitti",id);
    dispatch(getSinglePlan(id))
  },[])
  useEffect(()=>{
    if(isDelete){
      navigate("/trainer/home/tplans")
      handleClose()
    }
    dispatch(reset())
  },[isDelete])
  
  const deleteplan = ()=>{
    dispatch(deletePlans(id))
   
  }
  if(isLoading){
    return <Spinner/>
  }
  return (
    <>
    <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Confirm Action
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <>
                <div>Are you sure to remove {singlePlan[0]?.planName}</div>
              </>
            </Typography>
            <div className="content-end mt-3">
              <Button
                size="small"
                variant="contained"
                color="success"
                onClick={() => {
                  handleClose();
                }}
              >
                Cancel
              </Button>{' '}
              <Button
                className="delete-confirm-btn"
                size="small"
                variant="contained"
                color="error"
                onClick={()=>deleteplan()}
              >
                Confirm
              </Button>
            </div>
          </Box>
        </Modal>
    <div className="payment">
      <div className="card-payment">
        <div className="card-header">
          <img src={singlePlan.image} alt="" />
        </div>
        <div className="card-body">
          <div className="card-title primary-Color">{singlePlan.planName}</div>
          <div className="card-text">{singlePlan.description}</div>
          <div className="card-plan">
            <div className="card-plan-img">
              <ShoppingCartRoundedIcon />
            </div>
            <div className="card-plan-text">
              <div className="card-plan-title">
                Trainer : {singlePlan?.postedBy?.name}
              </div>
              <div className="card-plan-price">
                ₹{singlePlan.planAmount}/month
              </div>
            </div>
            <div className="card-plan-link"></div>
          </div>
          <div className="card-payment-button">
            {/* <button>Proceed to Payment</button> */}
          </div>
          <div className="card-cancel-button">
            
              <button className='dele' onClick={handleOpen}>delete</button>
            
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default TrainerSinglePlanScreen
