import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';

import LoginForm from '../components/LoginForm.jsx';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };
    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  processForm(e) {
    e.preventDefault();

    axios.post('/auth/login', { user: this.state.user })
      .then((res) => {
        console.log('login success')
      })
      .catch((err) => {
        const errors = err.response.data.errors;
        errors.summary = err.response.data.message;

        this.setState({
          errors
        })
      })
  }

  changeUser(e) {
    const field = e.target.name;
    const user = this.state.user;
    user[field] = e.target.value;

    this.setState({
      user
    });
  }

  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default LoginPage;
