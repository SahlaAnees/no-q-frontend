import React from "react";
import { Button } from "react-bootstrap";

function UserviewOfMerchant(){
    return(
        <div>
            <div className="queueArea">
                <Button onClick={showDay}>Queue 1</Button>
            </div>

            <div className="dayArea">
                <Button onClick={showSlot}>Day</Button>
            </div>

            <div className="slotArea">
                <Button>slot</Button>
            </div>


        </div>
    );
}

export default UserviewOfMerchant;