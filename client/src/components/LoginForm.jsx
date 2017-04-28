import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const LoginForm = ({
  onSubmit,
  onChange,
  successMessage,
  errors,
  user
}) => (
  <Card className='container'>
    <form action='/' onSubmit={onSubmit}>
      <h2 className='card-heading'>Login</h2>

      {successMessage && <p className='success-message'>{successMessage}</p>}
      {errors.summary && <p className='error-message'>{errors.summary}</p>}

      <div className='field-line'>
        <TextField
          floatingLabelText='Email'
          name='email'
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className='field-line'>
        <TextField
          floatingLabelText='Password'
          type='password'
          name='password'
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className='button-line'>
        <RaisedButton type='submit' label='Log in' primary />
      </div>

      <CardText>Dont have account? <Link to={'/signup'}>Create on</Link></CardText>
    </form>
  </Card>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  successMessage: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
