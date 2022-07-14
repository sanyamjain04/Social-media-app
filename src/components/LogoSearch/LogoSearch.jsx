import React from 'react'
import './LogoSearch.css'
import Logo from '../../img/twitter-logo.png'
import {UilSearch} from '@iconscout/react-unicons'


function LogoSearch() {
  return (
    <div className='Logosearch'>
        <img src={Logo} alt="logo" width={30} className='logo' />
        <div className="Search">
            <input type="text" placeholder='# Explore' className='search'/>
            <div className="s-icon">
                <UilSearch />

            </div>
        </div>
    </div>
  )
}

export default LogoSearch