import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import './ProfilePostsScreen.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { userPost, reset } from '../../../features/UserPosts/PostsSlice'
import { useState } from 'react'
function ProfilePostsScreen() {
  const dispatch = useDispatch()
  // get-state
  const { userposts, isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.userPost,
  )

  useEffect(() => {
    dispatch(userPost())
  }, [])

  useEffect(() => {
    if (isSuccess && userposts) {
    }
    dispatch(reset())
  }, [isError, isSuccess, message, dispatch, userposts])
  console.log('post', userposts)

  return (
    <>
      <div className="userprofilepostsscreen">
        <span className="poststext">Posts</span>
        {userposts
          ? userposts.map((post) => (
              <>
                <div className="singlepost">
                  <div className="postuserdetails">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqtDdxwuz8djhPKpWhiDQ3evq_vk6VkUnLA&usqp=CAU"
                      alt=""
                      className="postuserimg"
                    />
                    <span className="postusername">Gurupriyan</span>
                  </div>
                  <img src={post.image} alt="" className="postimg" />
                  <hr />
                  <div className="description">{post.description}</div>
                  <div className="likeandcomment">
                    <div className="like">
                      <span className="liketext">
                        <ThumbUpIcon />
                        Like
                      </span>
                      <br></br>
                      <span class="tooltiptext">
                        <ThumbUpIcon style={{ color: 'red' }} />
                        {post.like}
                      </span>
                    </div>
                    <div className="comment">
                      <span className="commenttext">
                        <InsertCommentIcon />
                        Comment
                      </span>
                      <br />
                      <span class="tooltiptext">
                        <InsertCommentIcon style={{ color: 'red' }} />
                        112
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space"></div>
              </>
            ))
          : ''}
      </div>
    </>
  )
}

export default ProfilePostsScreen
