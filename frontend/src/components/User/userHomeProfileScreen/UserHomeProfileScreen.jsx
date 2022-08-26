import React, { useEffect } from 'react'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle'
import FactCheckSharpIcon from '@mui/icons-material/FactCheckSharp'
import empty from '../../../images/profile-pic-avather.png'
import './UserHomeProfileScreen.scss'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Spinner from '../../spinner/Spinner'

function UserHomeProfileScreen() {
  

  const { user, isLoading } = useSelector((state) => state.auth)
  const [client, setClient] = useState(user)
  useEffect(() => {
    setClient(user)
  }, [user])
 

  if (isLoading) {
    return <Spinner />
  }
  return (
    <div className="userProfileCard">
      <div className="top">
        {client.coverimage ? (
          <img className="coverpic" src={client.coverimage} alt="" />
        ) : (
          <img className="coverpic" src={empty} alt="" />
        )}
      </div>
      {client.profileimage ? (
        <img className="roundpic" src={client.profileimage} alt="" />
      ) : (
        <img className="roundpic" src={empty} alt="" />
      )}

      <div className="name">
        <div
  
          className="nametext"
        >
          <NavLink
            style={{ textDecoration: 'none', color: 'black' }}
            to={'/home/profile'}
          >
            {client.name}
          </NavLink>{' '}
        </div>
      </div>
      <div className="bottom">
        <ul>
          <li
           
            className='cardtext '
          >
            <GroupAddIcon className="picon" />
            <NavLink
              className= 'userli'
              style={{ textDecoration: 'none' }}
              to={'/home/getacoach'}
            >
              Get a Coach
            </NavLink>
          </li>
          <li
            
              
            className= 'cardtext '
          >
            <FeaturedPlayListIcon className="picon" />
            <NavLink
              className='userli'
              style={{ textDecoration: 'none' }}
              to={'/home/getplans'}
            >
              {' '}
              Get Plans
            </NavLink>
          </li>
          <li
           
            className='cardtext '
          >
            <FactCheckSharpIcon className="picon" />
            <NavLink
              className= 'userli'
              style={{ textDecoration: 'none' }}
              to={'/home/myplans'}
            >
              My Plans
            </NavLink>
          </li>
        </ul>
        <div className="addpost">
          <NavLink style={{ textDecoration: 'none' }} to={'/home/addpost'}>
            <button
              // onClick={() => {
              //   setActive((prev) => ({
              //     ...prev,
              //     gc: false,
              //     gp: false,
              //     mp: false,
              //   }))
              // }}
              className="addpostbutton primary-Color"
            >
              <AddBoxOutlinedIcon />
              Add Post
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default UserHomeProfileScreen
