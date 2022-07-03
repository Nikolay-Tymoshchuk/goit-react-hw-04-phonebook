import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    const { name, number } = this.state;
    const { createNewContact } = this.props;
    createNewContact({ id, name, number });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="number">Number:</label>
        <br />
        <input
          type="text"
          name="number"
          value={number}
          onChange={this.handleChange}
        />
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  createNewContact: PropTypes.func.isRequired,
};
