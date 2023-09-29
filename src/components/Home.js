import React from 'react';
import './Home.css';
import bannerimg from '../img/landingpage.jpg';
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';

import MerchantCategoryList from './MerchantCategoryList';
//import MerchantList from './MerchantList';
import Aboutus from './Aboutus';


function Home() {
  return (
    <div className='Home'>

      <div className='Home-new'>
        <div className='home-banner-img'>
          <img src={bannerimg} alt='Banner' />
        </div>

        <div className='Home-text'>
          <h1>Modern Solution For Lengthy Queues.</h1>
          <h2>Pick a token from any of your desired merchants from anywhere.</h2>

          <Link to='/merchantList'>
            {/* <Button className="getTokenBtn" variant="contained" color="error" size="large" >Take a Token</Button> */}
            <button className="getTokenBtn" variant="contained" size="large" >Take a Token</button>
          </Link>
        </div>
      </div>


      {/* ==STATEMENT== */}
      <div>
          <Aboutus />
      </div>



      <div >
          <MerchantCategoryList />
      </div>


    </div>
  );
}

export default Home;
