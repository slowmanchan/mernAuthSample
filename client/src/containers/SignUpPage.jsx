import PropTypes from 'prop-types';
import React from 'react';
import SignUpForm from '../components/SignUpForm.jsx';
import axios from 'axios';

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: ''
      }
    }
    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }


  changeUser(e) {
    const field = e.target.name;
    const user = this.state.user;
    user[field] = e.target.value;

    this.setState({
      user
    });
  }

  processForm(e) {
    e.preventDefault();

    // const name = this.state.user.name;
    // const email = this.state.user.email;
    // const password = this.state.user.password;
    // const formData = `name=${name}&email=${email}&password=${password}`;

    axios.post('/auth/signup', {
      user: this.state.user
    })
      .then((res) => {
        console.log('Valid form');
      })
      .catch((err) => {
        const errors = err.response.data.errors;
        errors.summary = err.response.data.message;
        this.setState({
          errors
        })
        console.log(this.state.errors)
      })
  }

  render() {
    return (
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }
}

export default SignUpPage;
