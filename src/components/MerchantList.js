import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import axios from 'axios';
import './MerchantList.css';

import Button from "@mui/material/Button";
const baseApiUrl = "http://localhost:8080";

const MerchantList = () => {
  const history = useHistory();

  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
		search: "",
	});

  const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

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

  const handleSubmit = (event) => {
		event.preventDefault();
    console.log(formData.search)
		axios
			.get(`${baseApiUrl}/merchant/search/${formData.search}`)
			.then((response) => {
				console.log(response.data.data);
        setData(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

  const handleClick = (item) => {
    console.log(item)
    history.push('/userview', { data: item });
  };

  return (
    <div className='merchantListBox'>
      <h1 className='heading'>ALL MERCHANTS</h1>

      <div className='search'>
      <form onSubmit={handleSubmit} className='seacrhForm'>
      <input
					type='text'
								className='search-bar'
								id='search'
								name='search'
								// aria-describedby='emailHelp'
								placeholder='Search'
								value={formData.search}
								onChange={handleInputChange}
				/>
          <Button
							type='submit'
							variant='contained'
							size='medium'
							className='search-btn'
							//onClick={attemptLogin}
						>
							Search
					</Button>
      </form>
      </div>

      {data.map((item) => (
        <div key={item.ID} className='merchantbox' onClick={() => handleClick(item)}>
          
          <h3>Name of the Merchant : {item.Name}</h3>
          <h4>Category : {item.Category}</h4>
          <h4>Email : {item.Email}</h4>
        </div>
      ))}
    </div>
  );
};

export default MerchantList;
