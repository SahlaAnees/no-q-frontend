import React from "react";
import { Button } from "react-bootstrap";

function UserviewOfMerchant() {
    const showDay = () => {
        return (
            <div className='dayArea'>
                <Button onClick={showSlot}>Day</Button>
            </div>
        );
    };

    const showSlot = () => {
        <div className='slotArea'>
            <Button>slot</Button>
        </div>;
    };
    
	return (
		<div>
			<div className='queueArea'>
				<Button onClick={showDay}>Queue 1</Button>
			</div>
		</div>
	);
}





export default UserviewOfMerchant;
