import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createPost } from '../actions';

import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }
    renderField(field) {
        const { meta: { touched, error } } = field;

        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {touched && error}
                </div>
            </div>
        );
    }
    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }



    render() {
        const { handleSubmit } = this.props;
        return (<div>
            <div className="text-xs-right">

            </div>
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field
                    label="Title for Post"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link className="btn btn-danger" to="/">Cancel</Link>
            </form>
        </div>);
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title!";
    }
    if (!values.categories) {
        errors.categories = "Enter categories!";
    }
    if (!values.content) {
        errors.content = "Enter a content!";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);