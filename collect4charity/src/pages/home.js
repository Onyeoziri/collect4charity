import React from 'react'
import './home.css'
import WelcomeIMG from '../assets/monks.jpg'
import {Link} from 'react-router-dom'

function home() {
  return (
    <div sytle={{display: 'flex', justifyContent: 'center',}}>

      <div className='leftsside'>

        <h1>Home-- We are</h1>
        <button>
          DONATE NOW
        </button>
        
      </div>
      
      <img className='rightside' src= {WelcomeIMG} alt='' />
    </div>
  )
}

export default home