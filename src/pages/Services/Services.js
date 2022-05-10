import React from 'react';
import './services.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHandshake} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faMoneyBill} from '@fortawesome/free-solid-svg-icons'

function Services() {
  return (
    <div className='services'>
      <h1>Browse Services by Category</h1>
      <br/>
      <br/>
      <div className='btn3'>
        <button>
          <FontAwesomeIcon icon={faHandshake} size='2x' />
          <br/>
          <br/>
          DONATE
          <br/>
          <br/>
          <small>Donate to Baltimore County Non-profit Organizations.</small>
        </button>

        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} size='2x' />
          <br/>
          <br/>
          Discover Charities
          <br/>
          <br/>
          <small>Discover new charities and support their missions.</small>
        </button>

        <button>
          <FontAwesomeIcon icon={faMoneyBill} size='2x' />
          <br/>
          <br/>
          Manage Payments
          <br/>
          <br/>
          <small>Keep track of all payments made to charities.</small>
        </button>
      </div>
    </div>
  )
}

export default Services
