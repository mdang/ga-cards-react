import React, { Component } from 'react';
import './AddCard.css';

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      question: e.target.value
    })
  }

  handleSubmit(e) {
    fetch(process.env.REACT_APP_API_URL, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        question: this.state.question
      })
    }).then(response => {
      console.log('response', response);
      return response.json();
    }).then(card => {
      console.log('card added', card);
    }).catch(exception => {
      console.error(exception);
    })

    e.preventDefault();
  }

  render() {
    return (
      <section id="add-card" className="container-fluid">
        <div className="row">
          <form onSubmit={ this.handleSubmit } name="add-card">
            <input
              value={ this.state.question }
              onChange={ this.handleChange }
              className="form-control question-input"
              type="text"
              name="question"
              id="question"
              placeholder="What's your question?" />
          </form>
        </div>

        <div className="row card-preview">
          <div className="col-sm-6 col-md-3 col-lg-3">
            <div className="card">
              <h4 className="card-title">{ this.state.question }</h4>
              <h6>Cards Against Assembly</h6>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default AddCard;
