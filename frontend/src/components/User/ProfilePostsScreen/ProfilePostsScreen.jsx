import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import './ProfilePostsScreen.scss'
import { useSelector, useDispatch } from 'react-redux'
import emptyimg from "../../../images/no_img.svg"
import { useEffect } from 'react'
import { userPost, reset,} from '../../../features/UserPosts/PostsSlice'
import { useState } from 'react'
import Spinner from '../../spinner/Spinner'
import ProfilePosts from '../profilePosts/ProfilePosts'
function ProfilePostsScreen() {
  const dispatch = useDispatch()
  // get-state
  const { userposts, isSuccess, isError, isLoading, message,isDeleted } = useSelector(
    (state) => state.userPost,
  )
  const [post ,setPost]=useState([])

  useEffect(() => {
    dispatch(userPost())
  }, [isDeleted])

  useEffect(() => {
    if (userposts) {
      setPost(userposts)
    }
    dispatch(reset())
  }, [userposts])



  if(isLoading){
    return <Spinner/>
  }
  return (
    <>
      <div className="userprofilepostsscreen">
        <span className="poststext">Posts</span>
        {post.length
          ? post.map((post) => (
              <>
              <ProfilePosts post={post}/>
              </>
            ))
          : 
          <div className="emptyPost">
<img src={emptyimg} alt="" className="emptyimg" />
<p className="emptyimgtext">No posts found</p>


</div>
          }
      </div>
    </>
  )
}

export default ProfilePostsScreen
