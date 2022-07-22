import React from 'react'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle'
import FactCheckSharpIcon from '@mui/icons-material/FactCheckSharp'
import './UserHomeProfileScreen.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function UserHomeProfileScreen() {
  const [active, setActive] = useState({
    gc: false,
    gp: false,
    mp: false,
  })

  const {user}= useSelector((state)=>state.auth)

  return (
    <div className="userProfileCard">
      <div className="top">
        <img
          className="coverpic"
          src={user.coverimg}
          alt=""
        />
      </div>
      <img
        className="roundpic"
        src={user.profileimage}
        alt=""
      />
      <div className="name">
        <div onClick={() => {
              setActive((prev) => ({
                ...prev,
                gc: false,
                gp: false,
                mp: false,
              }))
            }} className="nametext">
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to={'profile'}
          >
            {user.name}
          </Link>{' '}
        </div>
      </div>
      <div className="bottom">
        <ul>
          <li
            onClick={() => {
              setActive((prev) => ({
                ...prev,
                gc: true,
                gp: false,
                mp: false,
              }))
            }}
            className={active.gc ? 'active cardtext ' : 'cardtext '}
          >
            <GroupAddIcon className="picon" />
            <Link
              className={active.gc ? 'active' : 'userli'}
              style={{ textDecoration: 'none' }}
              to={'getacoach'}
            >
              Get a Coach
            </Link>
          </li>
          <li
            onClick={() => {
              setActive((prev) => ({
                ...prev,
                gc: false,
                gp: true,
                mp: false,
              }))
            }}
            className={active.gp ? 'active cardtext ' : 'cardtext '}
          >
            <FeaturedPlayListIcon className="picon" />
            <Link
              className={active.gp ? 'active' : 'userli'}
              style={{ textDecoration: 'none' }}
              to={'getplans'}
            >
              {' '}
              Get Plans
            </Link>
          </li>
          <li
            onClick={() => {
              setActive((prev) => ({
                ...prev,
                gc: false,
                gp: false,
                mp: true,
              }))
            }}
            className={active.mp ? 'active cardtext ' : 'cardtext '}
          >
            <FactCheckSharpIcon className="picon" />
            <Link
              className={active.mp ? 'active' : 'userli'}
              style={{ textDecoration: 'none' }}
              to={'myplans'}
            >
              My Plans
            </Link>
          </li>
        </ul>
        <div className="addpost">
          <Link style={{textDecoration:"none"}} to={"addpost"}>
          <button onClick={() => {
              setActive((prev) => ({
                ...prev,
                gc: false,
                gp: false,
                mp: false,
              }))
            }} className="addpostbutton primary-Color">
            <AddBoxOutlinedIcon />
            Add Post
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserHomeProfileScreen
