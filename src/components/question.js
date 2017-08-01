import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Link } from 'react-router-dom';

/**
* A class for a single question with it's answers
*/
export default class Question extends Component {
  render() {
    const question = this.props.question;

    return (
        <div key={question.id}>
          <label><strong>{question.question}</strong></label>
            <div>
              { Object.keys(question.answer).map( (key) =>
                <div className="bottom-padding-radio" key={question.name + key}>
                 <Field
                   name={question.name}
                   component="input"
                   type="radio"
                   value= {question.answer[key]}
                   required
                 />
                 {" " + question.answer[key]}
                </div>
             )}
            </div>
            <div className="bottom-padding" />
          </div>
    );
  }
}
