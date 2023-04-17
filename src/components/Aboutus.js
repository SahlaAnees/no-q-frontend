import React from 'react';
import "./Aboutus.css";
import Grid from '@mui/material/Grid';

import gray from "../img/gray.jpg";

function Aboutus(){

    return (
        <section id="about">
        <div className='Aboutus'>
            <h3>NoQ Solution provides flexible service to both merchants and users.</h3>
            <Grid className="Merchant" container spacing={0}>
                <Grid item xs={12} sm={8} className="Merchant-description">
                    <h4>Are you a merchant?</h4>
                    <ul className='ul_list'>
                        <li className='list'>Must login.</li> 
                        <li className='list'>If you still don't have an account you can create a new account.</li>
                        <li className='list'>Easily schedule the time slots for queue.</li>
                        <li className='list'>Schedule queues weekly.</li>
                        <li className='list'>Better cutomer service by managing queues.</li>
                    </ul>
                </Grid>

                <Grid item xs={12} sm={4} className="Merchant-img">
                    <img src={gray} alt="Merchant-image" />
                </Grid>
            </Grid>

            <Grid className="User" container spacing={0}>
                <Grid item xs={12} sm={4} className="User-img">
                     <img src={gray} alt="User-image" />
                </Grid>

                <Grid item xs={12} sm={8} className="User-description">
                    <h4>Are you an user?</h4>
                    <ul className='ul_list'>
                        <li className='list'>Do not need to create account.</li> 
                        <li className='list'>Make appointments using email.</li>
                        <li className='list'>Easily get the token from any of the merchant.</li>
                        <li className='list'>Token details will be notified to the email.</li>
                        <li className='list'>Save a lot of time by using NoQ Solution.</li>
                    </ul>
                </Grid>
            </Grid>
        </div>
        </section>
    );
}

export default Aboutus;