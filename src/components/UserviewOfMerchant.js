import React from "react";
import { Button } from "react-bootstrap";

function UserviewOfMerchant() {


    const showSlot = () => {
        <div className='slotArea'>
            <Button>slot</Button>
        </div>;
    };

	return (
		<div>
			<div className='queueArea'>
				<Button>Queue 1</Button>
			</div>

            <div className='dayArea'>
                <Button onClick={showSlot}>Day</Button>
            </div>
		</div>
	);
}





export default UserviewOfMerchant;
