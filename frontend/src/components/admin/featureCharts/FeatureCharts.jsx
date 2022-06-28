import React from 'react'
import "./FeatureCharts.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {CircularProgressbar} from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'
function FeatureCharts() {
  return (
    <div className='featured'>
     <div className="top primary-Color">
          <h2 className="title">Total Sails</h2>
          <MoreVertOutlinedIcon fontSize='small'/>
     </div>
     <div className="bottom">
          <div className="featuredChart">
          <CircularProgressbar  value={65} text={"65%"} strokeWidth={5}/>
          </div>
          <p className="title primary-Color">Total sales made today</p>
          <p className="amount">₹250</p>
          <p className="desc">
                    somthing is processing.......
          </p>
     </div>
    </div>
  )
}

export default FeatureCharts
