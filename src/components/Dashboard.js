import React, { useState } from "react";
import axios from "axios";
import "./Dashboard.css";

import { Modal, Button, Form } from "react-bootstrap";
import { Grid } from "@mui/material";

const baseApiUrl = "http://localhost:8080";
//const apiUrl = 'http://localhost:8080/queue/create';
const token = "e692145b-d2e2-4348-bc8e-ffb178044641";

function Dashboard() {
	const [showModal, setShowModal] = useState(false);
	const [showQueue, setShowQueue] = useState(false);
	const [queue, setQueue] = useState([]);

	const [name, setName] = useState([]);
	const [interval, setInterval] = useState([]);
	const [startTime, setStartTime] = useState([]);
	const [endTime, setEndTime] = useState([]);

	const addQueue = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleSaveInfo = () => {
		// TODO: Save the information to the backend
		setShowQueue(true);

		axios({
			method: "post",
			url: "http://localhost:8080/queue/create",
			data: {
				// your request data here
				name: name,
				interval: interval,
				start_time: startTime,
				end_time: endTime,
			},
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				// handle success
			})
			.catch((error) => {
				// handle error
			});
		console.log(name, interval, startTime, endTime);
		handleCloseModal();
	};

	function handleStartTime(event) {
		const sTime = event.target.value;
		const sDate = new Date(sTime);
		console.log(sDate);

		setStartTime(sDate);
	}

	function handleEndTime(event) {
		const eTime = event.target.value;
		const eDate = new Date(eTime);
		console.log(eDate);

		setEndTime(eDate);
	}


	const tokenList = () => {
		const sDate = new Date(startTime);
		const eDate = new Date(endTime);

		const startHours = sDate.getUTCHours();
		const startMinutes = sDate.getUTCMinutes();
		const startTotalMinutes = startHours * 60 + startMinutes;

		const endHours = eDate.getUTCHours();
		const endMinutes = eDate.getUTCMinutes();
		const endTotalMinutes = endHours * 60 + endMinutes;

		const queueInterval = endTotalMinutes - startTotalMinutes;
		const numberOfTokens = queueInterval / interval;
		console.log(numberOfTokens);

		const day = sDate.getUTCDate();

		for (let i = 0; i < numberOfTokens; i++) {
			const startTime = new Date(sDate.getTime() + i * interval * 60000);
			const endTime = new Date(
				sDate.getTime() + (i + 1) * interval * 60000
			);
			console.log(startTime, endTime);

			setQueue((prevState) => [
				...prevState,
				{
					startTime: startTime,
					endTime: endTime,
					day: day,
				},
			]);
		}
	};

	const seeWhoResereved = () => {
		alert("user details");
	};

	return (
		<div>
			<div className='qContainer'>
				<Grid container>
					<Grid item xs={9}>
						<div className='queueButtons'>
							{showQueue && <DisplayQueue />}
						</div>
					</Grid>

					<Grid item xs={3}>
						<div className='addQueueButton'>
							<Button
								type='submit'
								variant='contained'
								size='medium'
								onClick={addQueue}
							>
								Add Queue
							</Button>
						</div>
					</Grid>

					<Modal show={showModal} onHide={handleCloseModal}>
						<Modal.Header closeButton>
							<Modal.Title>Add Information</Modal.Title>
						</Modal.Header>

						<Modal.Body>
							<Form>
								<Form.Group controlId='formName'>
									<Form.Label className='bodyLabel'>
										Name of queue
									</Form.Label>
									<Form.Control
										type='text'
										placeholder='Enter Queue Name'
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
									/>
								</Form.Group>

								<Form.Group controlId='formInterval'>
									<Form.Label className='bodyLabel'>
										Token Interval
									</Form.Label>
									<Form.Control
										type='number'
										placeholder='Enter Token Interval'
										value={interval}
										onChange={(e) =>
											setInterval(e.target.value)
										}
									/>
								</Form.Group>

								<Form.Group controlId='formStartTime'>
									<Form.Label className='bodyLabel'>
										Start time
									</Form.Label>
									<Form.Control
										type='datetime-local'
										placeholder='Enter start time'
										value={startTime}
										onChange={handleStartTime}
									/>
								</Form.Group>

								<Form.Group controlId='formEndTime'>
									<Form.Label className='bodyLabel'>
										End time
									</Form.Label>
									<Form.Control
										type='datetime-local'
										placeholder='Enter end time'
										value={endTime}
										onChange={handleEndTime}
									/>
								</Form.Group>
							</Form>
						</Modal.Body>

						<Modal.Footer>
							<Button
								className='save'
								variant='primary'
								onClick={handleSaveInfo}
							>
								Save Changes
							</Button>

							<Button
								className='close'
								variant='secondary'
								onClick={handleCloseModal}
							>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</Grid>
			</div>
		</div>
	);
}

function tokenList() {
	//const tokens = myQueue.toArray();
	return (
		//   <ul>
		//     {tokens.map((token, index) => (
		//       <li key={index}>{token}</li>
		//     ))}
		//   </ul>
		<div></div>
	);
}

function DisplayQueue() {
	return (
		<div className='queuebox'>
			<Button className='queue' variant='secondary'>
				Queue
			</Button>
			{tokenList()}
		</div>
	);
}

export default Dashboard;
