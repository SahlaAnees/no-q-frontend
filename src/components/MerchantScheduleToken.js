import React, { useState } from "react";
import moment from "moment";

const MerchantScheduleToken = () => {
    const queues = [
        {
          queueNumber: 1,
          startTime: "09:00",
          endTime: "12:00",
          interval: 15,
          unavailableDays: [0, 6], // Sunday and Saturday are unavailable
        },
        {
          queueNumber: 2,
          startTime: "12:00",
          endTime: "14:30",
          interval: 10,
          unavailableDays: [6], // Saturday is unavailable
        },
        {
          queueNumber: 3,
          startTime: "14:30",
          endTime: "17:00",
          interval: 20,
          unavailableDays: [0], // Sunday is unavailable
        },
      ];
      
      const today = new Date();
      const date = today.toLocaleDateString();



    const [queueNumber, setQueueNumber] = useState("");
    const [queueStartTime, setQueueStartTime] = useState("");
    const [queueEndTime, setQueueEndTime] = useState("");
    const [queueInterval, setQueueInterval] = useState("");
    const [unavailableDays, setUnavailableDays] = useState([]);
    const [selectedDayOfWeek, setSelectedDayOfWeek] = useState("");
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const [tokens, setTokens] = useState([]);
  
    // Function to handle adding a new queue
    const handleAddQueue = () => {
        const startMinutes = moment(queueStartTime, "HH:mm").minutes();
        const endMinutes = moment(queueEndTime, "HH:mm").minutes();
        const tokenInterval = parseInt(queueInterval, 10);
        const totalTokens = Math.floor((endMinutes - startMinutes) / tokenInterval);
        const newTokens = Array.from({ length: totalTokens }, (_, index) => {
          const tokenStartTime = moment(queueStartTime, "HH:mm")
            .add(index * tokenInterval, "minutes")
            .format("HH:mm");
          const tokenEndTime = moment(tokenStartTime, "HH:mm")
            .add(tokenInterval, "minutes")
            .format("HH:mm");
          return {
            startTime: tokenStartTime,
            endTime: tokenEndTime,
            status: "pending",
          };
        });
        setTokens([...tokens, ...newTokens]); // Update tokens state
        setQueueNumber("");
        setQueueStartTime("");
        setQueueEndTime("");
        setQueueInterval("");
      };
  
    // Function to handle clicking on a day box
    const handleDayClick = (dayOfWeek) => {
      setSelectedDayOfWeek(dayOfWeek);
    };
  
    // Function to render a day box
    const renderDayBox = (dayOfWeek, index) => {
        const date = moment().startOf("week").add(index, "days");
        const currentDayOfWeek = moment().format("ddd");
        const currentDate = moment().format("YYYY-MM-DD");
        return (
          <div
            key={dayOfWeek}
            onClick={() => handleDayClick(dayOfWeek)}
          style={{
            backgroundColor: unavailableDays.includes(dayOfWeek) ? "red" : "green",
            cursor: "pointer",
          }}
        >
          <div>{dayOfWeek}</div>
          <div>{date.format("MMM D")}</div>
          {dayOfWeek === currentDayOfWeek && date.format("YYYY-MM-DD") === currentDate && (
            <div>
              {tokens.map((token, index) => (
                <div key={index}>{`${token.startTime}-${token.endTime}`}</div>
              ))}
            </div>
          )}
        </div>
      );
    };
  
    // Function to handle adding an unavailable day
    const handleAddUnavailableDay = (dayOfWeek) => {
      if (unavailableDays.includes(dayOfWeek)) {
        setUnavailableDays(unavailableDays.filter((day) => day !== dayOfWeek));
      } else {
        setUnavailableDays([...unavailableDays, dayOfWeek]);
      }
    };

   
  return (
    <div>
      <h1>Merchant Dashboard</h1>
      <button onClick={handleAddQueue}>Add Queue</button>
      {queues.map((queue) => (
            <div key={queue.queueNumber}>
            <label>Queue Number: {queue.queueNumber}</label>
            {tokens.length > 0 &&
             daysOfWeek.map((dayOfWeek, index) => (
            <div key={index} onClick={() => handleDayClick(dayOfWeek)}>
            <label>
            {dayOfWeek}, {index === 0 ? date : moment(date).add(index, "days").format("MM/DD/YYYY")}
          </label>
          <button>{unavailableDays.includes(dayOfWeek) ? "Available" : "Unavailable"}</button>
          {tokens
            .filter((token) => moment(token.startTime, "HH:mm").format("ddd") === dayOfWeek)
            .map((token) => (
              <div key={token.id}>
                <label>Token Number: {token.tokenNumber}</label>
                <label>Start Time: {moment(token.startTime, "HH:mm").format("hh:mm A")}</label>
                <label>End Time: {moment(token.endTime, "HH:mm").format("hh:mm A")}</label>
              </div>
            ))}
        </div>
      ))}
  </div>
))}
    </div>
  );

};

export default MerchantScheduleToken;