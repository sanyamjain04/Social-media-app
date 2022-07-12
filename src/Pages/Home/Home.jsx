import React from 'react'
import './Home.css'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'

function Home() {
  return (
    <div className="Home">
        <ProfileSide />
        <PostSide />
        <RightSide />

    </div>
  )
}

export default Home