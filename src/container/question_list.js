import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions';
import { bindActionCreators } from 'redux';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Link } from 'react-router-dom';
import Question from '../components/question';

/*
*     The Specific Question Area for each question
*/
class QuestionArea extends Component {
  constructor(props){
    super(props);
  }

  //right now onSubmit just counts the number of incorrect answers
  onSubmit(values){
    var incorrectAnswers = 0;
    var answer = "";

    //values is an object, so must use object.keys
    Object.keys(values).map((key) => {
      for(var i = 0; i < this.props.questions.length; i++){
        if(this.props.questions[i].name === key){
          answer = this.props.questions[i].correct_answer;
        }
      }
      if(values[key] != answer){
        incorrectAnswers++;
      }
    });

    if(incorrectAnswers > 0){
      throw new SubmissionError({
        _error: `${incorrectAnswers} Incorrect Answers`
        });
     }
  }

  //Render the question and the text box in part of this quiz.
  renderQuestion(question){
      var buttonValue =  "";
      if(question.name.includes(4)){
          buttonValue = "Submit";
      }else{
          buttonValue = "Next";
      }

      return(
        <div key={question.name}>
          <Question question={question} />
        </div>
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
              {questions.map(this.renderQuestion)}
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

// return the legend title id (somehow make this better)
function getTitle(quizId){
  if(quizId === "harrypotter"){
    return "Harry Potter (1-7)";
  }else if(quizId === "thecircle"){
    return "The Circle";
  }else if(quizId === "friends"){
    return "Friends";
  }else if(quizId === "wizardofoz"){
    return "Wizard of Oz";
  }else if(quizId  === "lost"){
    return "Lost";
  }else if(quizId  === "arresteddevelopment"){
    return "Arrested Development";
  }else if(quizId  === "theoffice"){
    return "The Office";
  }else{
    return "Perks of Being a Wallflower";
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

///work on submit success -> redirect to results page
export default reduxForm({
  form: 'QuizForm',
  onSubmitSuccess: () => {
      console.log("you recieved a 100");
      alert("YOU RECEIVED A 100");
  }
})(
connect(mapStateToProps, mapDispatchToProps ) (QuestionArea)
);
