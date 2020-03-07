import React from 'react';
import {Button} from '@material-ui/core';
import Axios from 'axios';

export default class TestForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            plate_number: 'plate number',
            first_name: 'first name',
            last_name: 'last name',
            reason: 'reason'
        }

        this.handlePlate = this.handlePlate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleReason = this.handleReason.bind(this);
    }


    handlePlate(event) {
        this.setState({plate_number: event.target.value})
    }

    handleFirstName(event) {
        this.setState({ first_name: event.target.value});
    }

    handleLastName(event) {
        this.setState({ last_name: event.target.value});
    }

    handleReason (event) {
        this.setState({ reason: event.target.value});
    }

    handleSubmit (event) {
        let newObject = {
            plate_number: this.state.plate_number.toUpperCase(),
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            reason: this.state.reason
        }
        const Url = 'https://abuad-visitors-log.herokuapp.com/users/create'
        Axios.post(Url, newObject).
            then(console.log('succesfully created object')).
            catch((err) =>{
                console.log(err);
            });
        }

    render() {
        return (
            <div align="center">
                <form>
                    <input id="plate_number" placeholder={this.state.plate_number} type="text" onChange={this.handlePlate} />
                    <br/>
                    <input id="first_name" type="text" placeholder={this.state.first_name} onChange={this.handleFirstName} />
                    <br/>
                    <input id="last_name" type="text" placeholder={this.state.last_name} onChange={this.handleLastName} />
                    <br/>
                    <textarea id="reason" type="text" placeholder={this.state.reason} onChange={this.handleReason} />
                    <br/>
                    <Button onClick={this.handleSubmit} variant="outlined">Submit </Button>
                </form>
            </div>
        );
    }
}




