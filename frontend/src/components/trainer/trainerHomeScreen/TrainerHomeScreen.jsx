import React, { useState } from 'react'
import './TrainerHomeScreen.scss'
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { AllPosts} from "../../../features/trainerPosts/TrainerPostSlice"
import Spinner from '../../spinner/Spinner'
import TrainerPost from '../trainerPost/TrainerPost'
function TrainerHomeScreen() {
  const dispatch= useDispatch()

  const {allPosts,isLoading} = useSelector((state)=>state.trainerPost)


  useEffect(()=>{
dispatch(AllPosts())
  },[])
  // if(isLoading){
  //   return <Spinner/>
  // }

  return (
    <div className="trainerhomescreen">
      <span className="poststext">Posts</span>
      {allPosts ? allPosts.map((posts)=>(

 <>
 <TrainerPost posts={posts}/>
 </>
      )) : ""}
     
    
    </div>
  )
}

export default TrainerHomeScreen
