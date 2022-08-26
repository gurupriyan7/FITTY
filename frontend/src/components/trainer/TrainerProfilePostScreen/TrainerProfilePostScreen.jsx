import React from 'react'
import './TrainerProfilePostScreen.scss'
import emptyimg from '../../../images/no_img.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import {
  TrainerPosts,
  reset,
  deletePost,
} from '../../../features/trainerPosts/TrainerPostSlice'
import Spinner from '../../spinner/Spinner'
import ProfilePost from '../profilePost/ProfilePost'
function TrainerProfilePostScreen() {
  const dispatch = useDispatch()

  // get-userposts
  const { trainerPosts, isDeleted, isLoading } = useSelector(
    (state) => state.trainerPost,
  )
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
  if (isLoading) {
    return <Spinner />
  }
  return (
    <div className="trainerprofilepostsscreen">
      <span className="poststext">Posts</span>
      {posts.length ? (
        posts.map((post) => (
          <>
            <ProfilePost post={post} />
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
