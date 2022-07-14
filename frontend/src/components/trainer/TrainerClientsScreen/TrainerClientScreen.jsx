import React from 'react'
import "./TrainerClientScreen.scss"
function TrainerClientScreen() {
  return (
          <div className="container">
          <div className="row">
            {/* getacoach-card */}
            <div className="col-md-4 Tclientsscreen">
              <div className="top">
                <div className="tname">
                  <div className="ttext primary-Color">Gurupriyan</div>
                </div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJpn8p3YU24-9F6_4dLzMBDghh6_vZor4yg&usqp=CAU"
                  alt=""
                  className="trainercardimg"
                />
              </div>
              <div className="bottom">
                <div className="cat">
                 
                </div>
                <div className="coached">
                  <p className="coachedcount">30 days package</p>
                </div>
                <div className="slots">
                  <p className="slotsavailable primary-Color">5 Days Remaining</p>
                </div>
                <div className="enrol">
                  <button className="enrolbtn">Start</button>
                </div>
              </div>
            </div>
            {/* get a coach-card */}
            {/* getacoach-card */}
            <div className="col-md-4 Tclientsscreen">
              <div className="top">
                <div className="tname">
                  <div className="ttext primary-Color">Gurupriyan</div>
                </div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnJpn8p3YU24-9F6_4dLzMBDghh6_vZor4yg&usqp=CAU"
                  alt=""
                  className="trainercardimg"
                />
              </div>
              <div className="bottom">
                <div className="cat">
                 
                </div>
                <div className="coached">
                  <p className="coachedcount">30 days package</p>
                </div>
                <div className="slots">
                  <p className="slotsavailable primary-Color">5 Days Remaining</p>
                </div>
                <div className="enrol">
                  <button className="enrolbtn">Start</button>
                </div>
              </div>
            </div>
            {/* get a coach-card */}
           
           
          </div>
        </div>
  )
}

export default TrainerClientScreen