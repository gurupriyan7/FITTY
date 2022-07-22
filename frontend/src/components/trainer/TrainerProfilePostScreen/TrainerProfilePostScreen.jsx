import React from 'react'
import './TrainerProfilePostScreen.scss'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import emptyimg from '../../../images/no_img.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import {
  TrainerPosts,
  reset,
  deletePost
} from '../../../features/trainerPosts/TrainerPostSlice'
function TrainerProfilePostScreen() {
  const dispatch = useDispatch()
  // get-userposts
  const { trainerPosts,isDeleted } = useSelector((state) => state.trainerPost)
  const [posts, setPosts] = useState([])
 

  useEffect(() => {
    dispatch(TrainerPosts())
  }, [isDeleted])

  useEffect(() => {
    if (trainerPosts) {
      setPosts(trainerPosts)
    }
    dispatch(reset())
  }, [trainerPosts])
  const deleteTPost = (id) => {
     dispatch(deletePost(id))
    //  setDelId(id)
  }
  const liked = (id) => {}
  return (
    <div className="trainerprofilepostsscreen">
      <span className="poststext">Posts</span>
      {posts.length ? (
        posts
          
          .map((post) => (
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
                    <span className="liketext">
                      <ThumbUpIcon onClick={() => liked(post._id)} />{' '}
                      {post.like}
                    </span>
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
          ))
      ) : (
        <div className="emptyPost">
          <img src={emptyimg} alt="" className="emptyimg" />
          <p className="emptyimgtext">No posts found</p>
        </div>
      )}
    </div>
  )
}

export default TrainerProfilePostScreen
