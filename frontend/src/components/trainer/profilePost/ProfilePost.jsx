import React, { useState } from 'react'
import './ProfilePost.scss'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { useDispatch, useSelector } from 'react-redux'
import {
  deletePost,
  likeUserPost,
  unlikeUserPost,
} from '../../../features/trainerPosts/TrainerPostSlice'
function ProfilePost({ post }) {
  const { isLiked, isUnliked } = useSelector((state) => state.userPost)
  const { trainer } = useSelector((state) => state.trainerAuth)
  const [unLikeAction, setUnlikeAction] = useState(
    post.like.includes(trainer._id),
  )
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
  const dispatch = useDispatch()
  const deleteTPost = (id) => {
    dispatch(deletePost(id))
    //  setDelId(id)
  }
  const liked = (id) => {}
  return (
    <>
      {/* single-Post */}
      <div className="singlepost">
        <div className="postuserdetails">
          <img
            src={post.postedBy.profileimage}
            alt=""
            className="postuserimg"
          />
          <span className="postusername">{post.postedBy.name}</span>
          <div className="delete">
            <Tooltip title="Delete">
              <IconButton onClick={() => deleteTPost(post._id)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </div>
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
          <div className="comment">
            <span className="commenttext"></span>

            <br />
          </div>
        </div>
      </div>
      <div className="space"></div>
      {/* single-post */}
    </>
  )
}

export default ProfilePost
