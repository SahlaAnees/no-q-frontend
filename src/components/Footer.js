import React from 'react';
import "./Footer.css"
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className='footer'>
        {/* <div className='box'>
          <h3>quick links</h3>
          <Link to='/'>Home</Link>
          <br />
          <Link to='/aboutus'>Aboutus</Link>
          <br />
          <Link to='/merchantcategory'>Merchants</Link>
          <br />
          <Link to='/trainers'>Trainers</Link>
          <br />
          <Link to='/contact'>Contact Us</Link>
          <br />
        </div> */}

        {/* <div className='box'>
          <h3>opening hours</h3>
          <p>
            monday : <i> 7:00am - 10:30pm </i>
          </p>
          <p>
            tuesday : <i> 7:00am - 10:30pm </i>
          </p>
          <p>
            wednesday : <i> 7:00am - 10:30pm </i>
          </p>
          <p>
            friday : <i> 7:00am - 10:30pm </i>
          </p>
          <p>
            saturday : <i> 7:00am - 10:30pm </i>
          </p>
          <p>
            sunday : <i> closed </i>
          </p>
        </div> */}

        {/* <div className='timing'>
          <h3>Contact Us</h3>
          <p>
            <i className='fas fa-phone'></i> 0714 122 456
          </p>
          <p>
            <i className='fas fa-phone'></i> 0734 483 396
          </p>
          <p>
            <i className='fas fa-envelope'></i> fitness@fitness.com
          </p>
          <p>
            <i className='fas fa-map'></i> Nairobi, Kenya
          </p>
          <div className='share'>
            <i class='fa-brands fa-square-instagram'></i>
            <i class='fa-brands fa-facebook-f'></i>
            <i class='fa-brands fa-twitter'></i>
            <i class='fa-brands fa-linkedin'></i>
            <i class='fa-brands fa-pinterest'></i>
          </div>
        </div> */}

        

        <div className='socialmedia'>
          <ul>
          <li>
            <a href="https://www.facebook.com/" className='icon-link'>
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" className='icon-link'>
              <FaTwitterSquare />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" className='icon-link'>
              <FaInstagramSquare />
            </a>
          </li>
          </ul>
        </div>

        <div className="copyright">
          <FooterCopyright />
        </div>

        <div className='box'>
          <h3>newsletter</h3>
          <p>subscribe for latest updates</p>
          <form action=''>
            <input
              type='email'
              name=''
              className='email'
              placeholder='Enter your email'
              id=''
            />
            <button type='submit' value='subscribe' className='btn'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

function FooterCopyright(){
  var year = new Date();
  var cuurentYear=year.getFullYear();
  return (<footer><p>copyright&copy;{cuurentYear}</p></footer>);
  }

export default Footer;
