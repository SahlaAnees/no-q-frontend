import React from 'react';
import "./MerchantCategoryList.css"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {  NavLink, Link } from 'react-router-dom';

import health from "../img/health.png";
import beauty from "../img/beauty.png";
import food from "../img/food.png";
import deco from "../img/deco.png";
import animal from "../img/animal.png";
import theater from "../img/theater.png";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffff',
  ...theme.typography.body3,
  padding: theme.spacing(5),
  textAlign: 'center',
  border: '1px solid #D6D2C4',
  color: theme.palette.text.secondary,
}));

function MerchantCategoryList() {
  return (
    <div className="Merchant_Categories">
      <h3>Merchant Categories</h3>
 
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={5} columnSpacing={{ xs: 3, sm: 6, md: 9, l: 12 }}>
            <Grid item xs={4} spacing={5}>
              <Item>
                <img src={health} alt="health" />
                <Link exact to='/health' className={({ isActive }) => isActive ? 'link active' : 'link'}> 
                <h4>Health</h4>
                </Link>
              
              </Item>
            </Grid>

            <Grid item xs={4} spacing={5}>
              <Item>
                <img src={beauty} alt="beauty" />
                <Link exact to='/beauty' className={({ isActive }) => isActive ? 'link active' : 'link'}> 
                <h4>Beauty</h4>
                </Link>
              </Item>
            </Grid>

            <Grid item xs={4} spacing={5}>
              <Item>
                <img src={food} alt="food" />
                <Link exact to='/food' className={({ isActive }) => isActive ? 'link active' : 'link'}> 
                <h4>Food</h4>
                </Link>
              </Item>
            </Grid>

            <Grid item xs={4} spacing={5}>
              <Item>
                <img src={deco} alt="deco" />
                <Link exact to='/deco' className={({ isActive }) => isActive ? 'link active' : 'link'}> 
                <h4>Home & Deco</h4>
                </Link>
              </Item>
            </Grid>

            <Grid item xs={4} spacing={5}>
              <Item>
                <img src={animal} alt="animal care" />
                <Link exact to='/animal' className={({ isActive }) => isActive ? 'link active' : 'link'}> 
                <h4>Animal Care</h4>
                </Link>
              </Item>
            </Grid>

            <Grid item xs={4} spacing={5}>
              <Item>
                <img src={theater} alt="theater" />
                <Link exact to='/theater' className={({ isActive }) => isActive ? 'link active' : 'link'}> 
                <h4>Theater</h4>
                </Link>
              </Item>
            </Grid>
          </Grid>
        </Box>
  
    </div>

  );
}

export default MerchantCategoryList;
