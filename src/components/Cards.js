import React, { Component } from 'react';
import './Cards.css';

import Card from './Card';

class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL)
      .then(response => {
        return response.json();
      })
      .then(cards => {
        this.setState({
          cards
        })
      })
      .catch(exception => {
        console.error(exception);
      });
  }

  render() {
    const cards = this.state.cards.map(card => {
      return <Card key={ card._id } question={ card.question } />;
    });

    return (
      <section id="cards" className="container-fluid">
        <div className="row">
          {
            (cards.length) ?
              cards :
              <p>Add some cards to get started</p>
          }
        </div>
      </section>
    );
  }
}

export default Cards;
