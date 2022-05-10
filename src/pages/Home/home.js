import React from 'react'
import './home.css'
import WelcomeIMG from '../../assets/home.png'
import {Link, useNavigate} from 'react-router-dom';

function Home() {
  return (
    <div className= 'home'>

      <div className='container'>
        
        <h1>
          Supporting Nonprofit Charities in Baltimore
          County, Maryland.
        <br/>
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

export default Home