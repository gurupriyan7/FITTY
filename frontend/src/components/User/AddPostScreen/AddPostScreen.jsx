import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './AddPostScreen.scss'
import mm from '../../../images/no_img.svg'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import { userAddPost, reset } from '../../../features/userPosts/UserPostsSlice'
import { imageUpload } from '../../../util/cloudniary/imageUpload'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function AddPostScreen() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.userPost,
  )

  useEffect(() => {
    if (isSuccess) {
      navigate('/home/profile')
    }
    dispatch(reset())
  }, [isError, isSuccess, isLoading, message])

  const imageRef = useRef()
  const [image, setImage] = useState(null)

  // image-change
  const onChangeImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setImage(img)
    }
  }
  const [formData, setFormData] = useState({
    description: '',
    image:''
  })

  const [load, setLoad] = useState(false)

  const onchange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
 
 
  // submit-formData
  const onsubmit = async (e) => {
    e.preventDefault()
    if (!image) {
      alert("no image selected")
    }else{
      setLoad(true)
      const data = await imageUpload(image)
      formData.image =data.secure_url.toString()
      dispatch(userAddPost(formData))
      setLoad(false)
    }
  }


  return (
    <div className="useraddpostscreen container">
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
              name="description"
              type="text"
              onChange={onchange}
              className="description"
              value={formData.description}
            />
          </div>
        </div>
        <div className="postbtndiv col-12">
          <div className="postbtninnerdiv">
            <button onClick={onsubmit} className="postbtn">
              Add Post
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPostScreen
