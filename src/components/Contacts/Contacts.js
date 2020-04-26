import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Section from './Section/Section';
import InputForm from './InputForm/InputForm';
import shortid from 'shortid';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import localStorageLoader from '../../utils/localStorage';

const taskFilte = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.userName.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class Contacts extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsFromLS = localStorageLoader.load('contacts');
    if (contactsFromLS) {
      this.setState({
        contacts: contactsFromLS,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts)
      localStorageLoader.save('contacts', this.state.contacts);
  }

  addContacts = newContacts => {
    if (
      this.state.contacts.find(
        item =>
          item.userName.toLowerCase() === newContacts.userName.toLowerCase(),
      )
    ) {
      alert(`${newContacts.userName} is already in contact!`);
      return;
    }

    const contactToAdd = {
      ...newContacts,
      id: shortid.generate(),
    };
    this.setState(state => ({
      contacts: [...state.contacts, contactToAdd],
    }));
  };

  deleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
    console.log('sadsa');
  };
  changeFilte = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const filteredTasks = taskFilte(this.state.contacts, this.state.filter);
    return (
      <Section>
        <h1> Phonebook </h1>
        <InputForm onAddContacts={this.addContacts}> </InputForm>
        <h2> Contacts </h2>
        <Filter value={this.state.filter} onChangeFilter={this.changeFilte} />
        <ContactList
          contacts={
            this.state.contacts.length > 2 ? filteredTasks : this.state.contacts
          }
          ondeleteContact={this.deleteContact}
        ></ContactList>
      </Section>
    );
  }
}
