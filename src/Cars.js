import React, { Component } from 'react';
import './Cars.css';

class Cars extends Component {
constructor(props){

    super(props);

    this.name = this.props.name;
    this.model = this.props.model;
    this.country = this.props.country;
    this.speed = this.props.speed;
    }

    ShowCar(){console.log(this.name +' '+ this.model+' '+this.country+ ' '+this.speed+'.')}
}
ShowCar();
export default Cars;
