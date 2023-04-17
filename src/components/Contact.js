import React, { useRef } from 'react'
import "./Contact.css"
import Button from '@mui/material/Button';
//import map_image from "../img/map.png"

function Contact() {
  const nameRef = useRef()
  const emailRef = useRef()
  //const phoneRef = useRef()
  const messageRef = useRef()

  return (
    <div className='contactus'>
   
      <div className='topsection'>
        <div className='form'>
          <h3 id='mail'>Contact Us</h3>

          <form>
            <div className='labels'>
              <label htmlFor='name'>Name</label><br />
              <input
                type='text'
                id='fullname'
                placeholder='John Doe'
                required
                ref={nameRef}
              />
            </div>

            <div className='labels'>
              <label htmlFor='name'>Email Address</label><br />
              <input
                type='email'
                id='fullname'
                placeholder='me@example.com'
                required
                ref={emailRef}
              />
            </div>

            {/* <div className='labels'>
              <label htmlFor='name'>Phone Number</label>
              <b>
                <input type='tel' id='fullname' placeholder={+254} required ref={phoneRef}/>
                <br />
              </b>
            </div> */}

            <b>
              <div className='labels'>
                <label htmlFor='name'>Message</label>
                <br />
                <textarea
                  type='text'
                  id='usermessage'
                  placeholder='Write your message here..'
                  style={{
                    height: '150px',
                    width: '100%',
                    borderRadius: '12px',
                    padding: '15px',
                  }}
                  defaultValue={''}
                  ref={messageRef}
                />
              </div>
              <div className='btnclassName'>
              <Button variant="contained" color="success" size="medium" type='submit' id='btn' value='submit'>Submit</Button>
              </div>
              </b>
          </form>
        </div>
    </div>
    <b></b>
  </div>
        
  )
}

export default Contact