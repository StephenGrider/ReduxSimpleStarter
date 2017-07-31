import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions';
import { bindActionCreators } from 'redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';

/* The Specific Question Area for each question */
class QuestionArea extends Component {
  constructor(props){
    super(props);
  }

  //Render the question and the text box
  renderQuestion(question){
    return(
      <li key={question.id}>
        <div>
          <label>{question.question}</label>
            <div>
              <Field
                 name={`${question.id}`}
                component="input"
                type="input"
                />
            </div>
          </div>
          <div className="bottomPadding" />
      </li>
    );
  }

  //check the answers on, on submit
  onSubmit(values){
    var incorrectAnswers = 0;

    values.map((answer, index) => {
      if(answer === this.props.questions[index].answer){
        console.log("correct");
      }else{
        incorrectAnswers++;
     }
    })

    if(incorrectAnswers > 0){
      throw new SubmissionError({
        _error: `${incorrectAnswers} Incorrect Answers`
        });
     }else{
       alert("CONGRATS! YOU GOT A 100!");
     }
   }

  render(){
    const questions = this.props.questions;
    const { handleSubmit,  error, submitting } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <fieldset>
            <ol>
              {questions.map(this.renderQuestion)}
              {error &&
                <strong>
                  {error}
                </strong>}
            </ol>
              <button
              className="btn btn-primary right-buffer"
              disabled={submitting}
              type="submit">
                Submit
              </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    questions: state.questions
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchQuestions }, dispatch);
}

export default reduxForm({
form: 'HarryPotterQuizForm'
})(
connect(mapStateToProps, mapDispatchToProps ) (QuestionArea)
);
