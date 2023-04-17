import React from 'react';
import { useState } from 'react';
import {  Link } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import './MerchantProfile.css';
import logo from '../img/gray.jpg';
import map from '../img/map.jpg';

//import Map from './Map';

function MerchantProfile() {

  const [showModal, setShowModal] = useState(false);
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');



  const handleAddInfo = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveInfo = () => {
    // TODO: Save the information to the backend
    console.log(address, email, contactNumber);
    handleCloseModal();
  };


  return (
    <div className='profile'>
        <div className="header">
            <img src={logo} alt="logo" />

            <h1>Dental</h1>
        </div>

        <div className='details'>
            <h2>Merchant Profile</h2>
            <p>Address: <span className='detail-answer'>{address}</span></p>
            <p>Email: <span className='detail-answer'>{email}</span></p>
            <p>Contact Number: <span className='detail-answer'>{contactNumber}</span></p>
            <Button size="large" onClick={handleAddInfo}>Add Information</Button>
        </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                <Modal.Title>Add Information</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Form>
                    <Form.Group controlId="formAddress">
                    <Form.Label className='bodyLabel'>Address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                    <Form.Label className='bodyLabel'>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </Form.Group>

                    <Form.Group controlId="formContactNumber">
                    <Form.Label className='bodyLabel'>Contact Number</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter contact number"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                    />
                    </Form.Group>

                </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button className='save' variant="primary" onClick={handleSaveInfo}>
                        Save Changes
                    </Button>
                    <Button className='close' variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>

            </Modal>

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







