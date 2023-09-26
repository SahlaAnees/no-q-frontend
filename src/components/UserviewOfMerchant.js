import React from "react";
import { Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import map from '../img/map.jpg';

function UserviewOfMerchant() {

    const { data } = useLocation().state;

    const showSlot = () => {
        <div className='slotArea'>
            <Button>slot</Button>
        </div>;
    };

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

          {/* <div className='scheduleToken'>
            <Link exact to='/merchantscheduletoken'>
            <Button
                type='submit'
                variant="contained" 
                size="large" 
                className='schedule-btn'>
                    
                Schedule Token
                </Button>
            </Link>
          </div> */}
    </div>
	);
}





export default UserviewOfMerchant;
