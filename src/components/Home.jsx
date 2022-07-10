import React from 'react'
import './Home.css'
import PostSide from './PostSide/PostSide'
import ProfileSide from './ProfileSide'

function Home() {
  return (
    <div className="Home">
        <ProfileSide />
        <PostSide />
        <div className='rightSide'>rightSide</div>

    </div>
  )
}

export default Home