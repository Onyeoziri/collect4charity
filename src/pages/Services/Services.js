import React from 'react';
import './services.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHandshake} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faMoneyBill} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className='services'>
      <h1 className='sh1'>Browse Services</h1>
      <br/>
      <br/>
      <div className='btn3'>
        
        <Link to="/login">
          <button className='b1'>
            <div>
              <FontAwesomeIcon icon={faHandshake} size='2x' />
              <br/>
              <br/>
              DONATE        <span>.</span>
              <br/>
            </div>
            <br/>
              <small>Donate to Baltimore County Non-profit Organizations.</small>
          </button>
        </Link>

        <Link to="/charities">
          <button className='b1'>
            <div>
              <FontAwesomeIcon icon={faMagnifyingGlass} size='2x' />
              <br/>
              <br/>
              Discover Charities
              <br/>
            </div>

            <br/>
            <small>Discover new charities and support their missions.</small>
          </button>
        </Link>

        <Link to="/login">
          <button className='b1'>
            <div>
            <FontAwesomeIcon icon={faMoneyBill} size='2x' />
            <br/>
            <br/>
            Manage Payment
            <br/>
            </div>
            <br/>
            <small>Keep track of all payments made to charities.</small>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Services
