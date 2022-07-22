import React, { useState } from 'react'
import './TrainerHomeScreen.scss'
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { AllPosts} from "../../../features/trainerPosts/TrainerPostSlice"
function TrainerHomeScreen() {
  const dispatch= useDispatch()

  const {allPosts} = useSelector((state)=>state.trainerPost)


  useEffect(()=>{
dispatch(AllPosts())
  },[allPosts])

  return (
    <div className="trainerhomescreen">
      <span className="poststext">Posts</span>
      {allPosts ? allPosts.map((posts)=>(

      <>
      {/* single-Post */}
      <div className="singlepost">
        <div className="postuserdetails">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqtDdxwuz8djhPKpWhiDQ3evq_vk6VkUnLA&usqp=CAU"
            alt=""
            className="postuserimg"
          />
          <span className="postusername">{posts.postedBy.name}</span>
        </div>
        <img
          src={posts.image}
          alt=""
          className="postimg"
        />
        <hr />
        <div className="description ">
         <p className="discriptionText">{posts.description}</p>
        </div>
        <div className="likeandcomment">
          <div className="like">
            <span className="liketext">
              <ThumbUpIcon />
              {posts.like}
            </span>
            <br></br>
          
          </div>
          <div className="comment">
           
          </div>
        </div>
      </div>
      <div className="space"></div>
      {/* single-post */}
      </>
      )) : ""}
     
    
    </div>
  )
}

export default TrainerHomeScreen
