import React, { useContext, useState, useEffect } from 'react';
import AuthContext from './authContext';
import {  Link } from 'react-router-dom';
import {  Button } from 'react-bootstrap';
import './MerchantProfile.css';
import map from '../img/map.jpg';

import axios from "axios";
const baseApiUrl = "http://localhost:8080";

function MerchantProfile(props) {
    const { authKey } = useContext(AuthContext);
    const [data, setData] = useState(null);

    useEffect(() => {

        const config = {
            headers: {
                Authorization: 'Bearer ' + authKey
            }
          };
        
        axios.get(`${baseApiUrl}/merchant/get_single`, config)
        .then((response) => {
            console.log(response.data.data);
            setData(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [authKey]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='profile'>
        <div className="header">
            <h1>{data.Name}</h1>
        </div>

        <div className='details'>
            <h2>Merchant Profile</h2>
            <p>Name: <span className='detail-answer'>{data.Name}</span></p>
            <p>Email: <span className='detail-answer'>{data.Email}</span></p>
            <p>Category: <span className='detail-answer'>{data.Category}</span></p>
        </div>


            <div className='map'>
                {/* <Map address={address} /> */}
                <img src={map} alt="map" />
          </div>

          <div className='scheduleToken'>
            <Link exact to='/merchantscheduletoken'>
            <Button
                type='submit'
                variant="contained" 
                size="large" 
                className='schedule-btn'>
                    
                Schedule Token
                </Button>
            </Link>
          </div>
    </div>
  );
}
        

export default MerchantProfile;







