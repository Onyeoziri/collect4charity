import React from 'react'
import ahmed from '../../assets/Ahmed.png'
import fahad from '../../assets/fahad.png'
import jacob from '../../assets/jake.png'
import jeniah from '../../assets/Jeniah.png'
import jeremy from '../../assets/Jeremy.png'
import onyo from '../../assets/onyo.png'
import './Team.css'

function Team() {
  return (
    
    <div className='Team'>
      <h1>Meet Our Team Members</h1>
      <br/><ul> 
      <div className='members1'>
        <li>
        <h3 >Ahmed</h3>
        <br/> 
        <img className='pic' src={ahmed}/>
        <p>major: Bioinformatics <br/> 
        Class of 2022 <br/> 
        Fun fact: Visited 4 out of 6 livable continents
        </p></li>
      </div>
      </ul>
      <ul>
      <div className='members2'>
        <li><h3 >Fahad</h3>
        <br/>
        <img className='pic' src={fahad}/>
        <p>major: Computer Science <br/> 
        Class of 2022 <br/> 
        Fun Fact: I'm a big fan of traveling, I watch a lot of soccer. Forza Milan
        </p></li>
      </div></ul>

      <div className='members3'>
        <h3 >Jacob</h3>
        <br/>
        <img className='pic' src={jacob}/>
        <p>major: Computer Science <br/> 
        Class of 2022 <br/> 
        Fun fact: I have my own lawn/landscape business
        </p>
      </div>

      <div className='members4'>
        <h3 >Jeniah</h3>
        <br/>
        <img className='pic' src={jeniah}/>
        <p>major: Computer Science <br/> 
        Class of 2022 <br/> 
        Fun fact: I am a Belieber, I have a accessory/jewelry business, and I am obsessed with Animal Crossing
        </p>
      </div>

      <div className='members5'>
        <h3 >Jeremy</h3>
        <br/>
        <img className='pic' src={jeremy}/>
        <p>major: Computer Science <br/> 
        Class of 2022 <br/> 
        Fun fact: I am a golf enthusiast and I also enjoy playing videogames in my free time 
        </p>
      </div>

      <div className='members6'>
        <h3 >Onyeoziri</h3>
        <br/>
        <img className='pic' src={onyo}/>
        <p>major: Computer Science <br/> 
        Class of 2023 <br/> 
        Fun fact: I love the outdoors and I own a photography company called "Own Your Image"
        </p>
      </div>

     






    </div>
  )
}


export default Team
