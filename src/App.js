import React, { Component } from 'react';
import './App.css';

import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

import Header from './components/Header';
import Nav from './components/Nav';
import Cards from './components/Cards';
import About from './components/About';
import AddCard from './components/AddCard';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Router>
          <div>
            <Nav />
            <Route exact path="/" component={ Cards } />
            <Route path="/add" component={ AddCard } />
            <Route path="/about" component={ About } />
          </div>
        </Router>

        <Footer />
      </div>
    );
  }
}

export default App;
