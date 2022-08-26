import React from 'react'
import { useEffect } from 'react'
import "./ProfilePosts.scss"
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { useDispatch, useSelector } from 'react-redux'
import {
  
  likeUserPost,
  unlikeUserPost,
  postDelete
} from '../../../features/UserPosts/PostsSlice'
import { useState } from 'react'
function ProfilePosts({post}) {
          const dispatch = useDispatch()
          const deleteUPost =(id)=>{
                    dispatch(postDelete(id))
                      }
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
          <>
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
                <IconButton onClick={() => deleteUPost(post._id)}>
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
                <span className="commenttext">
                  
                </span>
                <br />
                <span class="tooltiptext">
                  
                </span>
              </div>
            </div>
          </div>
          <div className="space"></div>
        </>
  )
}

export default ProfilePosts