import React from 'react'
import './UserHomeScreen.scss'
// import InsertCommentIcon from '@mui/icons-material/InsertComment'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import { reset, AllPosts, likeUserPost} from '../../../features/UserPosts/PostsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Spinner from "../../../components/spinner/Spinner"
function UserHomeScreen() {
  const dispatch = useDispatch()
  const { allPosts,isLoading,isLiked } = useSelector((state) => state.userPost)
  const {user}=useSelector((state)=>state.auth)
  useEffect(() => {
    dispatch(AllPosts())
  }, [AllPosts])

  const like =(id)=>{
dispatch(likeUserPost(id))
  }
  const unLike=(id)=>{
    alert(id)
  }
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
              <div className="singlepost">
                <div className="postuserdetails">
                  <img
                    src={post.postedBy.profileimage}
                    alt=""
                    className="postuserimg"
                  />
                  <span className="postusername">{post.postedBy.name}</span>
                </div>
                <img
                  src={post.image}
                  alt=""
                  className="postimg"
                />
                <hr />
                <div className="description">
                  {post.description}
                </div>
                <div className="likeandcomment">
                  <div className="like">
                    {post.like.includes(user._id) ?
                    <span onClick={()=>unLike(post._id)} className="liketext">
                    <ThumbUpIcon sx={{color:"red"}}/>
                      {post.like.length}
                    </span> :

                    <span onClick={()=>like(post._id)} className="liketext">
                      <ThumbUpIcon />
                      {post.like.length}
                    </span>
                    }
                    
                    <br></br>
                    
                     
                  </div>
                  <div className="comment">
                   
                    
                  </div>
                </div>
              </div>
              <div className="space"></div>
            </>
          ))
        : ''}
    </div>
  )
}

export default UserHomeScreen
