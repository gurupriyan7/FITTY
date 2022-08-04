import React, { useRef, useState } from 'react'
import './AddPlanScreen.scss'
import mm from '../../../images/no_img.svg'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { imageUpload } from '../../../util/cloudniary/imageUpload'
import {AddPlan,reset} from "../../../features/TrainerPlans/TrainerPlanSlice"
import { useEffect } from 'react'
import Spinner from '../../spinner/Spinner'
function AddPlanScreen() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const imageRef = useRef()

const {isSuccess,isError,isLoading,message}=useSelector((state)=>state.trainerPlan)

useEffect(()=>{
if(isSuccess){
  navigate("/trainer/home/tplans")
}
dispatch(reset())
},[isSuccess,isError,isLoading,message])
  
  // form-data
  const [formdata, setFormData] = useState({
    description: '',
    image: '',
    planName: '',
    days: '',
    planAmount: '',
  })
  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // Image-preview
  const [image, setImage] = useState(null)
  const onChangeImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setImage(img)
    }
  }
  //   onsubmit
  const [load, setload] = useState(false)
  const onsubmit = async (e) => {
    e.preventDefault()
    
    if (!image) {
      alert('image not selected')
    } else {
      setload(true)
      const data = await imageUpload(image)
      
      formdata.image = data.secure_url.toString()
            dispatch(AddPlan(formdata))
      setload(false)
    }
  }
 
  if(isLoading){
    return <Spinner/>
  }
  return (
    <div className="traineraddplanscreen container">
      <div className="row">
        <div className="top col-12">
          <div className="headdingdiv">
            <p className="headding">Add Plan</p>
          </div>
          <div className="imagediv">
            <div className="imginnerdiv">
              {image ? (
                <img src={URL.createObjectURL(image)} className="postpreview" />
              ) : (
                <div for="postfile" className="emptyimg">
                  <div className="emptyimgicondiv">
                    <img className="emptyimgicon" src={mm} alt="" />
                    <p for="postfile" className="emptyimgtext">
                      No image selected
                    </p>
                  </div>
                </div>
              )}
              <div className="inputdiv">
                <input
                  id="postfile"
                  type="file"
                  ref={imageRef}
                  onChange={onChangeImage}
                  className="postimg"
                />
                <AddAPhotoIcon className="addimgicon"></AddAPhotoIcon>
                <div className="addimgicontext">Choose Image</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom col-12">
          <div className="name-amount">
            <textarea
              placeholder="Plane Name"
              name="planName"
              id=""
              cols="30"
              rows="10"
              className="name"
              onChange={onChange}
            />
            <textarea
              placeholder="Amount/Month"
              name="planAmount"
              id=""
              cols="30"
              rows="10"
              className="amount"
              onChange={onChange}
            />
          </div>
          <div className="descriptiondiv">
            <textarea
              placeholder="Decription..."
              type="text"
              className="description"
              name="description"
              value={formdata.description}
              onChange={onChange}
            />
            <textarea
              placeholder="No of days/work"
              name="days"
              type="text"
              className="slots"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="postbtndiv col-12">
          <div className="postbtninnerdiv">
            <button onClick={onsubmit} className="postbtn">
              Add Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPlanScreen
