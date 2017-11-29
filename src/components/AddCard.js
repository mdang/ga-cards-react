import React from 'react';
import './AddCard.css';

const AddCard = props => {
  return (
    <section id="add-card" className="container-fluid">
      <div className="row">
        <form name="add-card">
          <input className="form-control question-input" type="text" name="question" id="question" placeholder="What's your question?" />
        </form>
      </div>

      <div className="row card-preview">
        <div className="col-sm-6 col-md-3 col-lg-3">
          <div className="card">
            <h4 className="card-title"> </h4>
            <h6>Cards Against Assembly</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddCard;
