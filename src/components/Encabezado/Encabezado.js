import React from 'react';
import './Encabezado.css';

const encabezado = props => {
    const assignedClasses = [];
 
    if(props.carsLength <= 2 ) {
        assignedClasses.push("red");
    }

    if(props.carsLength === 1 ) {
        delete assignedClasses[0];
        assignedClasses.push("bold");
    }
    return (
        <div className="">
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}> Hello World!</p>
        </div>
    );
};

export default encabezado;