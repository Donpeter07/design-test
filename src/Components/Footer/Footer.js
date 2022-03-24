import React from 'react'
import Button from '@mui/material/Button';
import { FaPhoneAlt, FaUserCircle, FaCcVisa, FaFacebookSquare,} from 'react-icons/fa'
import {ImLinkedin2} from 'react-icons/im'
import { GoLocation } from 'react-icons/go'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-design'>
      <ul className='list'><br />
        <FaPhoneAlt />  1800 420 0707 <br /><br />
        <FaUserCircle />  customercare@company.com<br /><br />
        <GoLocation />  Address line 1Address line 2<br /><br /><br />

        <h4>PAYMENT METHODS</h4>
        <FaCcVisa />
      </ul>
      <ul className='list1'>
        <h4>COMPANY</h4>
        About us<br /><br />
        Sell with us<br /><br />
        Our sellers
      </ul>
      <ul className='list2'>
        <h4>INFORMATION</h4>
        Privacy Policy<br /><br />
        Exchange and Return Policy<br /><br />
        Terms and Conditions<br /><br />
        Common Questions
      </ul>
      <ul className='list3'>
        <h4>SUBSCRIBE NEWSLETTER</h4>
        <div className='search-bar'>
          Enter your email address  
        </div>
        <div><Button variant="contained" size="medium">Submit</Button></div>
        <div>     
           <FaFacebookSquare />
           <ImLinkedin2/>
        </div>
      </ul>
    </div>
  )
}

export default Footer