import React, { useState } from 'react'
import './UserPost.scss'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import {
  likeUserPost,
  unlikeUserPost,
} from '../../../features/UserPosts/PostsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
function UserPost({ post }) {
  const dispatch = useDispatch()
  const { isLiked, isUnliked } = useSelector((state) => state.userPost)
  const { user } = useSelector((state) => state.auth)
  const [unLikeAction, setUnlikeAction] = useState(post.like.includes(user._id))
  const [likeCount, setLikeCount] = useState(post?.like?.length)

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
    <div className="userhomescreen">
      <span className="poststext"></span>
      {/* single-Post */}

      <>
        <div className="singlepost">
          <div className="postuserdetails">
            <img
              src={post.postedBy.profileimage}
              alt=""
              className="postuserimg"
            />
            <span className="postusername">{post.postedBy.name}</span>
          </div>
          <img src={post.image} alt="" className="postimg" />
          <hr />
          <div className="description">{post.description}</div>
          <div className="likeandcomment">
            <div className="like">
              {unLikeAction ? (
                <span onClick={() => unLike(post._id)} className="liketext">
                  <ThumbUpIcon sx={{ color: 'red' }} />
                  {likeCount}
                </span>
              ) : (
                <span onClick={() => like(post._id)} className="liketext">
                  <ThumbUpIcon />
                  {likeCount}
                </span>
              )}

              <br></br>
            </div>
            <div className="comment"></div>
          </div>
        </div>
        <div className="space"></div>
      </>
    </div>
  )
}

export default UserPost
