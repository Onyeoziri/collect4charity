import React from 'react'
import './about.css'
import AboutImg from '../../assets/about.png'

function About() {
  return (
    <div className='about'>

      <div className='container2'>
        
        <div>
          <h1>ABOUT US</h1>
          <br/>
          
          <p>
            We are a collective group of individuals from class COSC 484. We came together with one thing in common.
            We all have a dying passion for helping people. We to promote donations, raise awareness and offer support to nonprofit charities
            in Baltimore County, Maryland.
          </p>
          <br/>
          <button>MEET OUR TEAM</button>
        </div>


        

        <img className='img2' src= {AboutImg} alt='' />
      </div>
      

    </div >
  )
}

export default About
