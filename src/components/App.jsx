import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import localStorageService from './LocalStorage/LocalStorage';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: localStorageService.getContacts(),
      filter: '',
      name: '',
      number: '',
    };
  }

  handleAddContact = newContact => {
    const isDuplicate = this.state.contacts.some(
      contact => contact.name === newContact.name
    );

    if (isDuplicate) {
      alert(`Contact with name '${newContact.name}' already exists!`);
    } else {
      this.setState(
        prevState => ({
          contacts: [
            ...prevState.contacts,
            { ...newContact, id: `id-${prevState.contacts.length + 1}` },
          ],
        }),
        () => {
          localStorageService.saveContacts(this.state.contacts);
        }
      );
    }
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleDeleteContact = contactId => {
    this.setState(
      prevState => ({
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      }),
      () => {
        localStorageService.saveContacts(this.state.contacts);
      }
    );
  };

  render() {
    return (
      <div>
        <h1>My Phonebook</h1>
        <div className="addformula">
          <ContactForm onAddContact={this.handleAddContact} />
          <label className="filterinput">
            <span className="filtername">Filter by Name:</span>
            <input
              className="filter-searchbar"
              type="text"
              name="filter"
              value={this.state.filter}
              onChange={this.handleFilterChange}
            />
          </label>
        </div>

        <h2>Contacts:</h2>
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
