import React from 'react'
import "./SinglePost.scss"
import TrainerHeadder from '../../../components/trainer/TrainerHeadder/TrainerHeadder'
import TrainerProfileCard from '../../../components/trainer/TrainerProfilecard/TrainerProfileCard'
function SinglePost() {
  return (
          <div className="trainerhome ">
          <div className="header">
            <TrainerHeadder />
          </div>
          <div className="screen">
            <div className="pcard">
              <div className="profilecard">
                <TrainerProfileCard />
              </div>
            </div>
            <div className="trainerSinglePostcontent">
            </div>
          </div>
        </div>
  )
}

export default SinglePost