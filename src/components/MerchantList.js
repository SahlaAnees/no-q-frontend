import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MerchantList.css';

const MerchantList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/merchant/get_all', {
      params: {
        paginator:`{"page":1, "size":10}`
      }
      })
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='merchantListBox'>
    <h2>Merchant</h2>
      {data.map((item) => (
        <div key={item.ID} className='merchantbox'>
          
          <h3>{item.Name}</h3>
          <h4>{item.Category}</h4>
          <h4>{item.Email}</h4>
        </div>
      ))}
    </div>
  );
};

export default MerchantList;
