import React, { Component, PropTypes } from 'react'
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form/immutable';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const _AccountDetails = (props) => {
  console.log(props);
  return (
    <form autoComplete={false} onSubmit={props.handleSubmit}>
      <div>
        <Field name="title" component={renderTextField} type="text" label="Title" />
      </div>
      <div>
        <Field name="name" component={renderTextField} type="text" label="Name" />
      </div>
      <div>
        <Field name="phone" component={renderTextField} type="phone" label="Phone (optional)" />
      </div>
      <div>
        <Field name="email" component={renderTextField} type="email" label="Email" />
      </div>
      <div>
        <Field name="password" component={renderTextField} type="password" label="Password"/>
      </div>
      <div>
        <FlatButton
          label='Cancel'
          onTouchTap={props.handlePrev}
          style={{marginRight: 12}}
        />
        <RaisedButton
          label='Next'
          type='submit'
          primary={true}
          disabled={props.error}
        />
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'RegisterForm',
  destroyOnUnmount: false,
  validate: values => {
    const errors = {};
    const requiredFields = [ 'title', 'name', 'email', 'password'];
    requiredFields.forEach(field => {
      if(!values[field]) {
        errors[field] = 'Required';
      }
    });
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }
})(_AccountDetails);
