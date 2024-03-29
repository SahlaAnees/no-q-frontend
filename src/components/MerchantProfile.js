import React, { useContext, useState, useEffect } from "react";
import AuthContext from "./authContext";
import { Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./MerchantProfile.css";
import map from "../img/map.jpg";

import axios from "axios";
const baseApiUrl = "http://localhost:8080";

function MerchantProfile(props) {
	const { authKey } = useContext(AuthContext);
	const [data, setData] = useState(null);
	const [queues, setQueue] = useState([]);

	const [showForm, setShowForm] = useState(false);

  const [queueData, setQueueData] = useState({
		name: "",
		interval: 60,
		start_time: "",
		end_time: "",
	});

	useEffect(() => {
		const config = {
			headers: {
				Authorization: "Bearer " + authKey,
			},
		};

		var Id;

		axios
			.get(`${baseApiUrl}/merchant/get_single`, config)
			.then((response) => {
				Id = response.data.data;
				setData(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});

		console.log(data);
		axios
			.get(`${baseApiUrl}/queue/get_by_merchant/1`, config)
			.then((response) => {
				console.log(response.data.data);
				setQueue(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [authKey]);

	const [selectedQueue, setSelectedQueue] = useState(null);

	const handleQueueSelect = (queue) => {
		setSelectedQueue(queue);
	};


	//take queue details and create queue
	// const history = useHistory();
  if (!data) {
		return <div>Loading...</div>;
	}


	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setQueueData({ ...queueData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

    const date = new Date('2023-04-14T10:00:00Z');

    console.log(queueData.interval)

		const postData = {
			name: queueData.name,
			interval: 60,
			start_time: date.toISOString(queueData.start_time),
			end_time: date.toISOString(queueData.end_time),
		};

    const config = {
			headers: {
				Authorization: "Bearer " + authKey,
			},
		};

		axios
			.post(`${baseApiUrl}/queue/create`, postData, config)
			.then((response) => {
				console.log(response.data);
				// history.push('/login');
			})
			.catch((error) => {
				console.log(error);
			});
	};


  //For get slots
  const showSlots = (date) => {
    
      const config = {
        headers: {
          Authorization: "Bearer " + authKey,
        },
      };
  
      var Id;
  
      axios
        .get(`${baseApiUrl}/queue/get_slots_by_date/1/${date}`, config)
        .then((response) => {
          setData(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    const slots = [
    {
      isReserved: false,
      startTime: '8:00',
      endTime: "9:00"
    },
    {
      isReserved: false,
      startTime: '9:00',
      endTime: "10:00"
    },
    {
      isReserved: false,
      startTime: '10:00',
      endTime: "11:00"
    },
    {
      isReserved: true,
      startTime: '11:00',
      endTime: "12:00"
    },
    {
      isReserved: false,
      startTime: '12:00',
      endTime: "13:00"
    }
  ]

	return (
		<div className='profile'>
			<div className='header'>
				<h1>{data.Name}</h1>
			</div>

			<div className='details'>
				<h2>Merchant Profile</h2>
				<p>
					Name: <span className='detail-answer'>{data.Name}</span>
				</p>
				<p>
					Email: <span className='detail-answer'>{data.Email}</span>
				</p>
				<p>
					Category:{" "}
					<span className='detail-answer'>{data.Category}</span>
				</p>
			</div>

			<div className='map'>
				{/* <Map address={address} /> */}
				<img src={map} alt='map' />
			</div>

			<div className='createQ-btn-div'>
      <Button
					className='create-q-btn'
					variant='contained'
					color='success'
					size='medium'
					onClick={() => setShowForm(true)}
				>
					Create Queue
				</Button>

			</div>
			<div>
				<h1 className='headingQueueList'>Queue List</h1>

        <div className="queueBoxArea">
				<ul className="queueNameBoxUL">
					{queues.map((queue) => (
						<li
							key={queue.ID}
							className='queueNameBox'
							onClick={() => handleQueueSelect(queue)}
						>
							{queue.Name}
						</li>
					))}
				</ul>
      </div>

				{showForm && (
					<div className='popup-form'>
						<h2>Create Queue</h2>

						<form
							onSubmit={handleSubmit}
							className='createQueueForm'
						>
							<label htmlFor='name'>Queue Name</label>
							<br />
							<input
								id='name'
								type='text'
								name='name'
								className='form-control'
								placeholder='Queue Name'
								value={queueData.name}
								onChange={handleInputChange}
							/>
							<br />

							<label htmlFor='interval'>Interval of a Slot</label>
							<br />
							<input
								id='interval'
								type='number'
								name='interval'
								className='form-control'
								placeholder='Interval of a slot'
								value={queueData.interval}
								onChange={handleInputChange}
                required
							/>
							<br />

							<label htmlFor='start_time'>Start time</label>
							<br />
							<input
								type='datetime-local'
								className='form-control'
								id='start_time'
								name='start_time'
								// aria-describedby='emailHelp'
								placeholder='start time'
								value={queueData.email}
								onChange={handleInputChange}
							/>
							<br />

							<label htmlFor='end_time'>End time</label>
							<br />
							<input
								type='datetime-local'
								className='form-control'
								id='end_time'
								name='end_time'
								placeholder='end time'
								value={queueData.end_time}
								onChange={handleInputChange}
                required
							/>
							<br />
							{/* {errors.password && <span>{errors.password}</span>} */}

							<Button
								className='form-create-q-btn'
								variant='contained'
								color='success'
								size='large'
							>
								CREATE 
							</Button>
						</form>

						<button className="form-close-btn" onClick={() => setShowForm(false)}>
							Close Form
						</button>
					</div>
				)}
			</div>

      <div className="daysArea">
              <Button
								className='day-btn'
								variant='contained'
								color='success'
								size='large'
                onClick={() => showSlots('2023-04-18T02:29:38.365Z')}
							>
								Today 
							</Button>

              <Button
								className='day-btn'
								variant='contained'
								color='success'
								size='large'
                onClick={() => showSlots('2023-04-19T02:29:38.365Z')}
							>
								Tomorrow 
							</Button>

              <Button
								className='day-btn'
								variant='contained'
								color='success'
								size='large'
                onClick={() => showSlots('2023-04-20T02:29:38.365Z')}
							>
								Thursday 
							</Button>

              <Button
								className='day-btn'
								variant='contained'
								color='success'
								size='large'
                onClick={() => showSlots('2023-04-21T02:29:38.365Z')}
							>
								Friday 
							</Button>

              <Button
								className='day-btn'
								variant='contained'
								color='success'
								size='large'
                onClick={() => showSlots('2023-04-22T02:29:38.365Z')}
							>
								Saturday 
							</Button>

              <Button
								className='day-btn'
								variant='contained'
								color='success'
								size='large'
                onClick={() => showSlots('2023-04-23T02:29:38.365Z')}
							>
								Sunday 
							</Button>

              <Button
								className='day-btn'
								variant='contained'
								color='success'
								size='large'
                onClick={() => showSlots('2023-04-24T02:29:38.365Z')}
							>
								Monday 
							</Button>
      </div> 

      <div className="slotsArea">
          {slots.map(slot => {
            return (<div style={{ backgroundColor: slot.isReserved ? 'red' : 'green', color: 'whitesmoke', width: '400px', height: '30px', padding: '20px', margin: '5px', textAlign: "center" , borderRadius: "5px", marginBottom:"30px" }}>
              <p>{slot.startTime} - {slot.endTime}</p>
            </div>)
          })}
      </div>

		</div>
	);
}

export default MerchantProfile;
