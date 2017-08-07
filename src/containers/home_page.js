import React, { Component } from 'react';
import TitleBar from '../components/title_bar';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

/**
*     The Home Page that contains the login
*/
class HomePage extends Component {
  //get the list of static users when mounted
  componentWillMount(){
    this.props.fetchUsers();
  }

  //on submit check if username is correct
  onSubmit(values){
    var isCorrect = false;

    this.props.users.map( user => {
      if(user.username.toLowerCase() === values.username.toLowerCase()){
          console.log("correct username");
          isCorrect = true;
      }
    });

    //if username is incorrect throw an error
    if(isCorrect === false){
      throw new SubmissionError({
          _error: 'Login failed!'
      })
    }
  }

  renderField(field){
    return(
      <div className="bottom-padding">
        <label> {field.label} </label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
          required
        />
      </div>
      );
  }

  render(){
    const { handleSubmit, submitting, error } = this.props;

    return(
      <div>
        <div>
          <TitleBar />
        </div>
        <div>
          <div className="bottom-padding center small-title">
            Log In
          </div>
          <div className="center has-error">
            {error}
          </div>
          <div>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field
                name="username"
                component={this.renderField}
                label="Username"
                type="text"
              />
              <Field
                name="password"
                component={this.renderField}
                label="Password"
                type="password"
                />
                <div>
                  Forget Password?
                </div>
                <div>
                  <div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn btn-primary right-buffer btn-space  left-btn-space">
                        Log In
                      </button>
                  </div>
                  <div>
                    <Link type="createanaccount" to="/" className="btn right-buffer">Create An Account</Link>
                  </div>
                </div>
          </form>
          </div>
        </div>
      </div>
    );
  }
}

//get the users
function mapStateToProps(state){
  return {
    users: state.users
  }
}

///work on submit success -> redirect to results page
export default reduxForm({
  form: 'LoginForm',
  onSubmitSuccess: () => {
        console.log('onSubmitSuccess called (yes, yes I do get called');
        browserHistory.push('/home');
        location.reload(); //temporary to get page to reload when route changes
    }
})(
connect( mapStateToProps, actions )(HomePage)
);
