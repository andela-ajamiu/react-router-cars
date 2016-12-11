// ./src/index.jsx
import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

class Main extends Component {
    render() {
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Scotch Cars</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><Link to="/" activeClassName="active">Home</Link></li>
                                <li><Link to="/cars" activeClassName="active">Cars</Link></li>
                                <li><Link to="/about" activeClassName="active">About Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

class Home extends Component {
    render(){
        return (<h1>Home Page</h1>);
    }
}

// More components
class Car extends Component {
    constructor() {
        super();
        this.state = {
            cars: []
        }
    };

    componentWillMount(){
        // Static data
        const data = [
            {
                id: 1,
                name: 'Honda Accord Crosstour',
                year: '2010',
                model: 'Accord Crosstour',
                make: 'Honda',
                media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
                price: '$16,811'

            },
            {
                id: 2,
                name: 'Mercedes-Benz AMG GT Coupe',
                year: '2016',
                model: 'AMG',
                make: 'Mercedes Benz',
                media: 'http://media.ed.edmunds-media.com/mercedes-benz/amg-gt/2016/oem/2016_mercedes-benz_amg-gt_coupe_s_fq_oem_1_717.jpg',
                price: '$138,157'

            },
            {
                id: 3,
                name: 'BMW X6 SUV',
                year: '2016',
                model: 'X6',
                make: 'BMW',
                media: 'http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg',
                price: '$68,999'
            },
            {
                id: 4,
                name: 'Ford Edge SUV',
                year: '2016',
                model: 'Edge',
                make: 'Ford',
                media: 'http://media.ed.edmunds-media.com/ford/edge/2016/oem/2016_ford_edge_4dr-suv_sport_fq_oem_6_717.jpg',
                price: '$36,275'
            },
            {
                id: 5,
                name: 'Dodge Viper Coupe',
                year: '2017',
                model: 'Viper',
                make: 'Dodge',
                media: 'http://media.ed.edmunds-media.com/dodge/viper/2017/oem/2017_dodge_viper_coupe_acr_fq_oem_3_717.jpg',
                price: '$123,890'
            }
        ];
        // Update state
        this.setState({cars: data});
    }

    render(){

        const carNode = this.state.cars.map( (car) => 
            <a href="#" className="list-group-item" key={car.id}>{car.name}</a>
        );

        // console.log(carNode)
        return (
            <div>
                <h1>Cars page</h1>
                <div className="list-group">
                    {carNode}
                </div>
            </div>
        );
    };
};



class CarDetail extends Component {
    render(){
        return (<h1>{this.props.params.id}</h1>);
    }
}



class About extends Component {
    render(){
        return (<h1>About page</h1>);
    }
}



render(
    <Router history={browserHistory} >
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="/cars" component={Car}/>
            <Route path="/cars/:id" component={CarDetail}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('container')
);