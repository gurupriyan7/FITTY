import React from 'react'
import './UserHomeScreen.scss'
// import InsertCommentIcon from '@mui/icons-material/InsertComment'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import { reset, AllPosts } from '../../../features/UserPosts/PostsSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
function UserHomeScreen() {
  const dispatch = useDispatch()
  const { allPosts } = useSelector((state) => state.userPost)
  useEffect(() => {
    dispatch(AllPosts())
  }, [AllPosts])
  

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
                    <span className="liketext">
                      <ThumbUpIcon />
                      {post.like}
                    </span>
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
