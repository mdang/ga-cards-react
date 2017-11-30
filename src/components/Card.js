import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="col-sm-6 col-md-3 col-lg-3">
        <div className="card">
          <h4 className="card-title">{ this.props.question }</h4>
          <h6>Cards Against Assembly</h6>
        </div>
      </div>
    )
  }
}

export default Card;
