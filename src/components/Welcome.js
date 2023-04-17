import React from 'react'
import "./Welcome.css"

     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
     integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
     crossorigin="anonymous" referrerpolicy="no-referrer"/>

function Welcome() {
  return (
    <div className='Invites'>
     <p>
     <i className="fa-solid fa-check fa-8x" size="lg"></i>
    </p>

    <h2>YOUR SESSION HAS BEEN BOOKED</h2>
    <h3>TOKEN DETAILS</h3>
    <p>Queue: Queue Name</p>
    <p>Token: Token Number</p>
    <p>Date: 12/04/2023</p>
    <p>Time interval: 30 Minutes</p>

    </div>
  )
}

export default Welcome