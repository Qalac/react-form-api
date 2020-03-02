import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navclass">
                <a class="navbar-brand text-white" href="https://visioncave.net">VisionCave</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                  <ul class="navbar-nav mr-auto ml-4">
                <li class="nav-item active">
                 <Link to="" className="nav-link text-warning">Services <span class="sr-only">(current)</span></Link>
                 </li>
                    <li className="nav-item">
                  <Link to="" className="nav-link text-warning" href="#">Resources</Link>
                </li>
                <li class="nav-item">
                 <Link to="/contact" class="nav-link text-warning" href="#">Contact</Link>
                 </li>
                </ul>
             <span class="navbar-btn">
             <Link to="/register"><Button className="navbtn" variant="contained">Hire Developers</Button></Link>
            </span>
            </div>
            </nav>
            </div>
        )
    }
}
