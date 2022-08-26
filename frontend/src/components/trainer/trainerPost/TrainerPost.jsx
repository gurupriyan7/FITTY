import React, { useState } from 'react'
import "./TrainerPost.scss"
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import {
  likeUserPost,
  unlikeUserPost,
} from '../../../features/trainerPosts/TrainerPostSlice'
import { useDispatch, useSelector } from 'react-redux'
function TrainerPost({posts}) {
  const dispatch = useDispatch()
  const { isLiked, isUnliked } = useSelector((state) => state.userPost)
  const { trainer } = useSelector((state) => state.trainerAuth)
  const [unLikeAction, setUnlikeAction] = useState(posts.like.includes(trainer._id))
  const [likeCount, setLikeCount] = useState(posts?.like?.length)

  const like = (id) => {
    dispatch(likeUserPost(id))
    setLikeCount(likeCount + 1)
      setUnlikeAction(true)
  }
  const unLike = (id) => {
    dispatch(unlikeUserPost(id))
    setLikeCount(likeCount - 1)
    setUnlikeAction(false)
  }
  return (
          <>
      {/* single-Post */}
      <div className="singlepost">
        <div className="postuserdetails">
          <img
            src={posts?.postedBy?.profileimage}
            alt=""
            className="postuserimg"
          />
          <span className="postusername">{posts?.postedBy?.name}</span>
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
              {unLikeAction ? (
                <span onClick={() => unLike(posts._id)} className="liketext">
                  <ThumbUpIcon sx={{ color: 'red' }} />
                  {likeCount}
                </span>
              ) : (
                <span onClick={() => like(posts._id)} className="liketext">
                  <ThumbUpIcon />
                  {likeCount}
                </span>
              )}

              <br></br>
            </div>
          <div className="comment">
           
          </div>
        </div>
      </div>
      <div className="space"></div>
      {/* single-post */}
      </>
  )
}

export default TrainerPost