import React from 'react';
import {Button} from '@material-ui/core';

export default function testform() {
    return (
        <div>
            <h2>Abuad Test</h2>
            <form action="" method="post">
                <input id="plate_number"type="text" placeholder="plate number" />
                <br/>
                <input id="first_name" type="text" placeholder="First name" />
                <br/>
                <input id="last_name" type="text" placeholder="Last name" />
                <br/>
                <input id="reason" type="text" placeholder="Reason" />
                <br/>
                <input id="present" type="boolean" placeholder="Not Present" />
                <br/>
                <input id="arrival" type="datetime" placeholder="Arrival" />
                <br/>
                <input id="departure" type="datetime" placeholder="Departure" />
                <br/>
                <Button variant="outlined">Submit </Button>



            </form>

            <h3>Display Here</h3>
            <p id="diplay" className="mt-3"></p>
        </div>
    )
}
