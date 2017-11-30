import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    }
  }

  handleClick(e) {
    this.setState(prevState => {
      return {
        visible: !prevState.visible
      }
    });
  }

  render() {
    return (
      <div className="col-sm-6 col-md-3 col-lg-3">
        <div
          onClick={ this.handleClick.bind(this) }
          className="card">
          <h4 className={ 'card-title ' + ((this.state.visible) ? '' : 'hidden') }>{ this.props.question }</h4>
          <h6>Cards Against Assembly</h6>
        </div>
      </div>
    )
  }
}

export default Card;
