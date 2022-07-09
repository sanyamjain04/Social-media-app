import React from 'react'
import './ProfileCard.css'
import Cover from '../img/cover.jpg'
import Profile from '../img/SanyamJain.jpg'

function ProfileCard() {
  return (
    <div className='profilecard'>
        <div className="profileimages">
            <img src={Cover} alt="" className='cover-image' />
            <img src={Profile} alt="" className='profile-image' />
        </div>
        <div className="profile-name">
            <span>Sanyam Jain</span>
            <span>Learning Full Stack Development</span>
        </div>
        <div className="follow-status">
            <hr />
            <div>
                <div className="follow">
                    <span>100</span>
                    <span>Followings</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>10</span>
                    <span>Followers</span>
                </div>
            </div>
            <hr />
        </div>
        <span>
            My Profile
        </span>
    </div>
  )
}

export default ProfileCard