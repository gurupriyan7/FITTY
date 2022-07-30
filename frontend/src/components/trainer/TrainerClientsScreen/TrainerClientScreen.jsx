import React from 'react'
import "./TrainerClientScreen.scss"
import { GET_TRAINER_CLIENTS } from '../../../constants/trainerConstants'
import {API} from '../../../API/Trainer'
import {useSelector,useDispatch} from "react-redux"
import { useEffect } from 'react'
import { useState } from 'react'
function TrainerClientScreen() {
 const {trainer} = useSelector((state) => state.trainerAuth)
  

    const token =  trainer.token
    const config ={
      headers:{
        Authorization:`Bearer ${token}`
      }
    }
    console.log("token",token);
    const [clients,setClients]=useState([])
    const getClient = async()=>{
      const {data}= await API.get(GET_TRAINER_CLIENTS,config)
      setClients(data)
    }
    useEffect(()=>{
     getClient()
    },[])
            console.log("clients",clients);
  return (
          <div className="container">
          <div className="row">
            {/* getacoach-card */}
            {clients.length ?
            clients.map((user)=>(
              <>
              <div className="col-md-4 Tclientsscreen">
                <div className="top">
                  <div className="tname">
                    <div className="ttext primary-Color">{user.name}</div>
                  </div>
                  <img
                    src={user.profileimage}
                    alt=""
                    className="trainercardimg"
                  />
                </div>
                <div className="bottom">
                  <div className="cat">
                   
                  </div>
                  <div className="coached">
                    <p className="coachedcount">one month package</p>
                  </div>
                  <div className="slots">
                    <p className="slotsavailable primary-Color">Expiry date {user.expry} </p>
                  </div>
                  <div className="enrol">
                    <button className="enrolbtn">Start</button>
                  </div>
                </div>
              </div>
              </>
            ))
            :""}

            {/* get a coach-card */}
          
           
           
          </div>
        </div>
  )
}

export default TrainerClientScreen