import React from 'react';
import "./Footer.css"
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className='footer'>
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

        <div className='contactBox'>
          <h3>contact us</h3>
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

        <div className='newsbox'>
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
