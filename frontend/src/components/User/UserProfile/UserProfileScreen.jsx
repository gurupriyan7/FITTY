import React from 'react'
import './UserProfileScreen.scss'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ProfilePostsScreen from '../ProfilePostsScreen/ProfilePostsScreen';
function UserProfileScreen() {
  return (
    <>
    <div className="singleplanscreen container-fluid">
      <div className="row">
        <AddAPhotoIcon className='addCovericon'/>

        <div className="top col-12">

          <img
            src="https://scontent.fcok8-1.fna.fbcdn.net/v/t39.30808-6/250713542_1729340387456304_9196444806310970091_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ya_QKB6_JiEAX-DUkTD&_nc_oc=AQkIhhX6I1qqSs6vKnplWXbhE3T3ZQQF_7ussLUE6Z16IL3PgOdiVa8EEzM1hC4SOoI&_nc_ht=scontent.fcok8-1.fna&oh=00_AT9Z1zqrW-8QqC4XeJhijblc0Chqv-aeiaQJyLwsANHKCA&oe=62D179AB"
            alt=""
            className="coverimg"
          />
        </div>
        <div className="updetails">
          <img
            src="https://scontent.fcok8-1.fna.fbcdn.net/v/t1.6435-9/82549164_1189955858061429_8521194662629736448_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=qIdwnaniLLoAX-DiBGy&tn=CpgIrfUW4Ca1UxJB&_nc_ht=scontent.fcok8-1.fna&oh=00_AT9VDCtaIvmdOOI2676HJVlpjFMdeV44ZlQTMydBdrhfPA&oe=62EAD2B7"
            alt=""
            className="profilepic"
          />

          <div className="pdetails">
            <div className="Pnamediv">
              <p className="Pname primary-Color">Gurupriyan j</p>
              <div className="Peditbtndiv">
              <button className="Peditbtn">Edit</button>
              </div>

            </div>
            <div className="Pemaildiv">
              <p className="Pemail">Gurupriyanj007@gmail.com</p>
            </div>
            <div className="pedit">
              {/* <buttom className="peditbtn">Edit</buttom> */}
            </div>
              <hr className="Pline" />
            <div className="noPostsdiv">
            </div>
          </div>
        </div>
      </div>
    </div>
    <ProfilePostsScreen/>
    </>
  )
}

export default UserProfileScreen
