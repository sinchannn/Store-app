import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componentss/Navbar';
import ProductList from './componentss/ProductList';
import Details from './componentss/Details';
import Cart from './componentss/carting';
import Default from './componentss/Default';
import Modal from './componentss/Modal';

class App extends Component{
  render(){
    return (
     <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/Details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal/>
     </React.Fragment>
    );
  }
}

export default App;
      