import React, { Component } from 'react';
import TitleBar from '../components/title_bar';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
*     The Home Page that contains the login
*/
class HomePage extends Component {

  onSubmit(values){
    console.log("Pressed Submit. Must Validate. Then Login");
  }

  renderField(field){
    const {meta: {touched, error} } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return(
      <div className="bottom-padding">
        <label> {field.label} </label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          { touched ? error : '' }
        </div>
      </div>
      );
  }


  render(){
    const { handleSubmit } = this.props;

    return(
      <div>
        <div>
          <TitleBar />
        </div>
        <div>
          <div className="bottom-padding center small-title">
            Log In
          </div>
          <div>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <Field
                name="login"
                component={this.renderField}
                label="Login"
              />
              <Field
                name="password"
                component={this.renderField}
                label="Password"
                />
                <div>
                  Forget Password?
                </div>
                <div>
                  <button type="submit" className="btn btn-primary right-buffer btn-space  left-btn-space">Log In</button>
                </div>
                <div>
                  <Link type="createanaccount" to="/" className="btn right-buffer">Create An Account</Link>
                </div>
          </form>
          </div>
        </div>
      </div>
    );
  }

}

///work on submit success -> redirect to results page
export default reduxForm({
  form: 'LoginForm',
  onSubmitSuccess: () => {
      console.log("you have logged in");
  }
})(
connect(null ) (HomePage)
);
