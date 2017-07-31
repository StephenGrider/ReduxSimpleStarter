import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions';
import { bindActionCreators } from 'redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Link } from 'react-router-dom';

/* The Specific Question Area for each question */
class QuestionArea extends Component {
  constructor(props){
    super(props);
  }

  //right now onSubmit just counts the number of incorrect answers
  onSubmit(values){
    var incorrectAnswers = 0;
    var answer = "";

    //values is an object, so must use object.keyys
    Object.keys(values).map((key) => {

    for(var i = 0; i < this.props.questions.length; i++){
        if(this.props.questions[i].name === key){
          answer = this.props.questions[i].correct_answer;
        }
      }

      if(values[key].toLowerCase() != answer.toLowerCase()){
        incorrectAnswers++;
      }
    });

    if(incorrectAnswers > 0){
      throw new SubmissionError({
        _error: `${incorrectAnswers} Incorrect Answers`
        });
     }
  }

  //Render the question and the text box if part of this quiz.
  renderQuestion(question){
      return(
        <li key={question.id}>
          <div>
            <label>{question.question}</label>
              <div>
                <Field
                name={question.name}
                component="input"
                type="input"
                className="form-control"
                required
                />
              </div>
            </div>
          <div className="bottom-padding" />
        </li>
      );
  }

  //render based on the quiz type (should seperate by data type)
  render(){
    //get only the questions that matches the questionId. do not use map, USE FILTER.
    //filter takes a function that returns true or false based on whether you want the item in the resulting array or not.
    const questions = this.props.questions.filter( question => {
      if(question.name.includes(this.props.quizId)){
        return question;
      }
    });
    const { submitting, handleSubmit, error } = this.props;
    const legendTitle = getTitle(this.props.quizId);

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <fieldset>
            <legend className="center title bottom-padding jumbotron text-center"> {legendTitle} </legend>
            <ol>
              {questions.map(this.renderQuestion)}
            </ol>
            <div className="has-error center">
              {error}
            </div>
              <div>
                <button
                className="btn btn-primary right-buffer"
                disabled={submitting}
                type="submit">
                  Submit
                </button>
              </div>
              <div>
                <Link
                className="btn btn-danger right-buffer btn-space"
                type="cancel"
                to="/"
                >
                  Go Back
                </Link>
              </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

// return the legend title id
function getTitle(quizId){
  if(quizId === "hp"){
    return "Harry Potter (1-7) Quiz";
  }else if(quizId === "thecircle"){
    return "The Circle Quiz";
  }else if(quizId === "friends"){
    return "Friends Quiz";
  }else if(quizId === "abouttime"){
    return "About Time Quiz";
  }else if(quizId  === "lost"){
    return "Lost Quiz";
  }else if(quizId  === "arresteddevelopment"){
    return "Arrested Development Quiz";
  }else{
    return  "Perks of Being a Wallflower Quiz";
  }
}

function mapStateToProps(state, ownProps) {
  return {
    questions: state.questions,
    quizId: ownProps.match.params.id
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchQuestions }, dispatch);
}

export default reduxForm({
  form: 'QuizForm',
  onSubmitSuccess: () => {
      alert("YOU GOT A 100");
      history.back();
  }
})(
connect(mapStateToProps, mapDispatchToProps ) (QuestionArea)
);
