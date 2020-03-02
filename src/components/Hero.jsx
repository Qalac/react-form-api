import React from 'react'
import {Button, Paper} from '@material-ui/core';

export default function Hero() {
    return (
        <div id="hero" className="container">
            <div className="row ">
                <div className="col text-center pt-5">
                    <div className="">
                        <h1><span className="">VisionCave</span> brings you the World's 
                        <span className="text-warning"> top software engineering talent</span></h1>
                    </div>

                    <div className=" ">
                    <p>Our Mission is to empower Innovative minds 
                        with advanced software system to make life easier for you geniuses.</p>
                    </div>
                    <div className="btn m-3 p-5">
                        <Button variant="outlined" color="gold" size="large">Coming Soon</Button>
                        
                    </div>
                    <br/>
                        <Paper elevation={3}>Contact - dev@visioncave.net</Paper>
                </div>
            </div>
           
            <hr/>
        </div>
        
    )
}
