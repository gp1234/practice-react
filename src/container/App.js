import React,  { Component } from 'react';
import './App.css';
import Cars from '../components/Cars/Cars'
import Encabezado from '../components/Encabezado/Encabezado';
import Spinner from '../components/Spinner/spinner';


class App extends Component {
    //This are creational Lyfecycles methods: constructor, getDerivedStateFromProps, componentDidMount)=
    constructor(props) 
    {
        super(props);
        console.log("The constructor get init")
    }
    state = {
        cars: [
            {id: '', name:'', year: ''},
            {id: '', name:'', year: ''}
        ],
        condition: 'new',
        counter: 0,
        showEncabezado: true,
        loaded: false
    
    }

    static getDerivedStateFromProp(props,state)
    {
        console.log(" getDerivedStatesfrom props", props);
        return state;
    }

    componentDidMount() {
        console.log("The component did mount");
        const that = this;
        fetch('https://swapi.co/api/starships/')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                const starship = json.results;
                const st = starship.map((st, index) => {
                   const nave = {id: index, name: st.name, year: st.passengers}
                   return nave;
                })

                that.setState({ cars: st})
                that.setState({loaded: true})
            })

           
            
    }

    shouldComponentUpdate(nextProps, nextState) {

        console.log(" shouldcomponentupdate");
        return true;
    }

    componentDidUpdate() {
        console.log(" componentDidUpdate");
    }

    deleteHandler = i => {
       const cars = [...this.state.cars];
       cars.splice(i, 1);
      /*  this.setState((prevState, props) => {
           return {
               cars:cars,
               counter: prevState.counter + 1
           };
        }); */
        this.setState( {cars: cars})
    }

 

    render() {
        const cars = (this.state.loaded) ? (  <Cars 
            cars={this.state.cars}
            clicked={this.deleteHandler}
            
        />): <Spinner />;
        console.log("the component is rendered")
        return(
            <div className="App">
                {this.state.showEncabezado ? (
                    <Encabezado 
                        title="This is a Car Vizualizator"
                        carsLength = {this.state.cars.length}
                    />
                ): null}
                {cars}
            </div>

        )
    }
}

export default App;