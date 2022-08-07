import React, { useState } from 'react'
import './UserHomeScreen.scss'
// import InsertCommentIcon from '@mui/icons-material/InsertComment'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import { reset, AllPosts, likeUserPost,unlikeUserPost} from '../../../features/UserPosts/PostsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Spinner from "../../../components/spinner/Spinner"
import UserPost from '../userPost/UserPost'
function UserHomeScreen() {
  const dispatch = useDispatch()
  const { allPosts,isLoading,isLiked,isUnliked } = useSelector((state) => state.userPost)
  const {user}=useSelector((state)=>state.auth)
  const [likeaction,setLikeaction]=useState(false)
  const [likeCount,setLikeCount]=useState()
  useEffect(() => {
    dispatch(AllPosts())
  }, [AllPosts])

if(isLoading){
  return <Spinner/>
}
  return (
    <div className="userhomescreen">
      <span className="poststext">Posts</span>
      {/* single-Post */}
      {allPosts
        ? allPosts.map((post) => (
           <>
           <UserPost post={post}/>
           </>
          ))
        : ''}
    </div>
  )
}

export default UserHomeScreen
