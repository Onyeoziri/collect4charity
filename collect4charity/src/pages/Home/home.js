import React from 'react'
import './home.css'
import WelcomeIMG from '../../assets/monks.jpg'
import {Link} from 'react-router-dom'

function home() {
  return (
    <div className= 'home'>

      <div className='leftsside'>

        <h1>
          We are here to support to nonprofit charities in Baltimore
          County, Maryland.
        </h1>

        <button>
          DONATE NOW
        </button>
        
      </div>
      
      <img className='rightside' src= {WelcomeIMG} alt='' />
    </div>
  )
}

export default home