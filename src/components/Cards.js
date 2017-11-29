import React, { Component } from 'react';
import './Cards.css';

import Card from './Card';

class Cards extends Component {
  render() {
    return (
      <section id="cards" className="container-fluid">
        <div className="row">
          <Card />
          <Card />
        </div>
      </section>
    );
  }
}

export default Cards;
