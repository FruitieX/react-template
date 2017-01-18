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

const _Location = (props) => {
  console.log(props);
  return (
    <form autoComplete={false} onSubmit={props.handleSubmit}>
      <div>
        <Field name="area" component={renderTextField} type="text" label="Area" />
      </div>
      <FlatButton
        label='Back'
        onTouchTap={props.handlePrev}
        style={{marginRight: 12}}
      />
      <RaisedButton
        label='Register'
        type='submit'
        primary={true}
        disabled={props.error}
      />
    </form>
  );
}

export default reduxForm({
  form: 'RegisterForm',
  destroyOnUnmount: false,
  validate: values => {
    const errors = {};
    const requiredFields = [ 'location' ];
    requiredFields.forEach(field => {
      if(!values[field]) {
        errors[field] = 'Required';
      }
    });
    return errors;
  }
})(_Location);
