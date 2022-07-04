import { useEffect } from 'react'
import { Button } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { trainerLogout} from '../../../features/trainerAuth/TrainerSlice'

import './TrainerHeadder.scss'


function TrainerHeadder() {
  const Navigate = useNavigate()
  const dispatch = useDispatch()

  const { trainer} = useSelector(
    (state) => {
      return state.trainerAuth
    },
  )
  function logout() {
    dispatch(trainerLogout())
  }

  useEffect(() => {
    if (!trainer) {
      Navigate('/trainer')
    }
  }, [trainer])
  return (
    <div className="main">
      <div
        className="navbar display-flex  position-fixed"
        style={{ zIndex: '9', boxShadow: 'revert-layer' }}
      >
        <NavLink style={{ textDecoration: 'none' }} to="/trainer/home">
          <span className="LOGO">FITTY</span>
        </NavLink>
        {trainer ? (
          <Button onClick={logout} className="loginButton">
            Logout
          </Button>
        ) : (
          <Button
            onClick={() => {
              Navigate('/trainer')
            }}
            className="loginButton"
          >
            Login
          </Button>
        )}

        {/* scroll-inticater */}
        <div className="progress-container">
          <div className="progress-bar" id="myBar"></div>
        </div>
      </div>
    </div>
  )
}

export default TrainerHeadder
