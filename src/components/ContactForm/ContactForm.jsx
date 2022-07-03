import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Field, Button } from './ContactForm.styled';

import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputIdGenerate = nanoid();
  numberInputIdGenerate = nanoid();

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    const { name, number } = this.state;
    const { onSubmit } = this.props;
    onSubmit({ id, name, number });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputIdGenerate}>Name:</label>
        <Field
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
          id={this.nameInputIdGenerate}
        />
        <label htmlFor={this.numberInputIdGenerate}>Number:</label>
        <Field
          type="text"
          name="number"
          value={number}
          onChange={this.handleChange}
          id={this.numberInputIdGenerate}
        />
        <Button type="submit">
          <span>add contact</span>
          <i></i>
        </Button>
      </Form>
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
  onSubmit: PropTypes.func.isRequired,
};
