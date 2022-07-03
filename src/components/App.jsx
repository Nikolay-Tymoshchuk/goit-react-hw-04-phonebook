import { Component } from 'react';
import { Container, Title } from './App.styled';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  contactCreate = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const { contacts, name, number } = this.state;
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm
          contacts={contacts}
          createNewContact={this.contactCreate}
        />

        <Title>Contacts</Title>
        <Filter contacts={contacts} />
        <ContactList data={contacts} />
      </Container>
    );
  }
}
