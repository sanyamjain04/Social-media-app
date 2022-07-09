import React from 'react'
import './Home.css'
import ProfileSide from './ProfileSide'

function Home() {
  return (
    <div className="Home">
        <ProfileSide />
        <div className='postSide'>postSide</div>
        <div className='rightSide'>rightSide</div>

    </div>
  )
}

export default Home