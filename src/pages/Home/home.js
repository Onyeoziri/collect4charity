import React from 'react'
import './home.css'
import WelcomeIMG from '../../assets/monks.jpg'
import {Link, useNavigate} from 'react-router-dom';

function home() {
  return (
    <div className= 'home'>

      <div className='container'>
        
        <h1>
          We are here to support to nonprofit charities in Baltimore
          County, Maryland.
        <br/>
        <button >
          DONATE NOW
        </button>
        </h1>

      

      <img className='img1' src= {WelcomeIMG} alt='' />
      </div>
      
      
    </div>
  )
}

export default home