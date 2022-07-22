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
import { userPost, reset,postDelete} from '../../../features/UserPosts/PostsSlice'
import { useState } from 'react'
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


const deleteUPost =(id)=>{
dispatch(postDelete(id))
  }
  return (
    <>
      <div className="userprofilepostsscreen">
        <span className="poststext">Posts</span>
        {post.length
          ? post.map((post) => (
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
                      <span className="liketext">
                        <ThumbUpIcon />
                        {post.like}
                      </span>
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
