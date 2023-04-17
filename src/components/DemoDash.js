import React from "react";
import './DemoDash.css';
import { Button } from "react-bootstrap";

function DemoDash(){
    return(
        <div className='dashContainer'>

        <div className="qContainer">
            <div className="queuebox">
                Queue 1
            </div>

            <div className="addQueueButton">
                <Button type='submit'
                variant="contained" 
                size="medium" >Add Queue</Button>
            </div>
            </div>

            <div className="dayContainer">
            <div className="dayArea">
                <div className="day">
                <Button type='submit'
                variant="contained" 
                size="medium" >Today</Button>
                </div>

                <div className="day">
                <Button type='submit'
                variant="contained" 
                size="medium" >Monday</Button>
                </div>

                <div className="day">
                <Button type='submit'
                variant="contained" 
                size="medium" >Tuesday</Button>
                </div>

                <div className="day">
                <Button type='submit'
                variant="contained" 
                size="medium" >Wednesday</Button>
                </div>

                <div className="day">
                <Button type='submit'
                variant="contained" 
                size="medium" >Thursday</Button>
                </div>

                <div className="day">
                <Button type='submit'
                variant="contained" 
                size="medium" >Friday</Button>
                </div>

                <div className="day">
                <Button type='submit'
                variant="contained" 
                size="medium" >Saturday</Button>
                </div>

                </div>

            </div>

            <div className="tokenArea">

                <div className="token">
                <Button type='submit'
                variant="contained" 
                size="medium" >8.00 a.m - 8.30 a.m</Button> 
                </div>

                <div className="token">
                <Button type='submit'
                variant="contained" 
                size="medium" >8.30 a.m - 9.00 a.m</Button> 
                </div>

                <div className="token">
                <Button type='submit'
                variant="contained" 
                size="medium" >9.00 a.m - 9.30 a.m</Button> 
                </div>

                <div className="token">
                <Button type='submit'
                variant="contained" 
                size="medium" >9.30 a.m - 10.00 a.m</Button> 
                </div>

                <div className="token">
                <Button type='submit'
                variant="contained" 
                size="medium" >10.00 a.m - 10.30 a.m</Button> 
                </div>

            </div>
        </div>
    );
}

export default DemoDash;