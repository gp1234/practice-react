import React, { Component } from 'react';
import './Car.css';

class Car extends Component {
    constructor(props)
    {
        super(props);
    }

    render(){
        return (

            <div className="Car">
                <p onClick={this.props.click}>I am an {this.props.name} and I am from the {this.props.year} year.</p>
               
            </div>
        );
        
        
    }
};

export default Car;