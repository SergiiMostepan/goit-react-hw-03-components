import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputForm extends Component {
  static propTypes = {
    onAddContacts: PropTypes.func.isRequired,
  };

  state = {
    userName: '',
    userPhone: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  hendleSubmit = e => {
    e.preventDefault();

    this.props.onAddContacts({
      ...this.state,
    });

    this.setState({
      userName: '',
      userPhone: '',
    });
  };

  render() {
    return (
      <div>
        <h3> Name </h3>
        <form onSubmit={this.hendleSubmit}>
          <input
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <h3> Number </h3>
          <input
            type="text"
            name="userPhone"
            value={this.state.userPhone}
            onChange={this.handleChange}
          />
          <button type="submit"> Add contact </button>
        </form>
      </div>
    );
  }
}
