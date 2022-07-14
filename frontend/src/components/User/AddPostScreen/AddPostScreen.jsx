import React, { useRef, useState } from 'react'
import './AddPostScreen.scss'
import mm from '../../../images/no_img.svg'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
function AddPostScreen() {
  const imageRef = useRef()
  const [image, setImage] = useState(null)

  const onChangeImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setImage(img)
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
                    <textarea placeholder='Decription...' type="text" className="description" />
          </div>
          
        </div>
        <div className="postbtndiv col-12">
          <div className="postbtninnerdiv">

                    <button className="postbtn">Add Post</button>
          </div>
          </div>
      </div>
    </div>
  )
}

export default AddPostScreen
