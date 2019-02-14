import React, {Component} from 'react';
import Car from './Car/Car';

class Cars extends Component {
    render() {
        return this.props.cars.map((car,index) => {
            return (
                <Car 
                    click={() => this.props.clicked(index)}
                    key= {index} 
                    name={car.name}   
                    year={car.year}
                    
                />
            );
        });
    }
}

export default Cars;