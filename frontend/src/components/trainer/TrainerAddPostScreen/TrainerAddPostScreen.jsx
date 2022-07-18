import React, { useRef, useState,useEffect } from 'react'
import mm from '../../../images/no_img.svg'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import './TrainerAddPostScreen.scss'
import {useSelector,useDispatch,} from "react-redux"
import { useNavigate } from 'react-router-dom'
import {imageUpload} from "../../../util/cloudniary/imageUpload"
import {reset,trainerAddpost} from "../../../features/Posts/PostsSlice"
function TrainerAddPostScreen() {
  const imageRef = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()
// require-state
const { isError, isSuccess, isLoading, message } = useSelector(
  (state) => state.Post,
)

useEffect(()=>{
if(isSuccess){
  navigate("/trainer/home/tprofile")
}
dispatch(reset())
},[isSuccess,isError,message])

  // Image-preview
  const [image, setImage] = useState(null)
  const onChangeImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setImage(img)
    }
  }

  // form-data
  const [formdata,setFormData]=useState({
    description:"",
    image:""
  })

  const onChange = (e)=>{
    setFormData((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }

  // onsubmit
  const [load,setload]= useState(false)
  const onsubmit = async(e)=>{
    e.preventDefault()
    if(!image){
      alert("image not selected")
    }else{
       setload(true)
       const data = await imageUpload(image)
       formdata.image = data.secure_url.toString()
     dispatch(trainerAddpost(formdata))
     setload(false)

    }
  }
  return (
    <div className="traineraddpostscreen container">
      <div className="row">
        <div className="top col-12">
          <div className="headdingdiv">
            <p className="headding">Add Posts</p>
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
          <div className="descriptiondiv">
            <textarea
              placeholder="Decription..."
              type="text"
              className="description"
              name="description"
              value={formdata.description}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="postbtndiv col-12">
          <div className="postbtninnerdiv">
            <button onClick={onsubmit} className="postbtn">Add Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainerAddPostScreen
