import { Component } from 'react';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import style from './ContactList.module.css';
class ContactList extends Component {
  render() {
    const { onDeleteContact } = this.props;
    const filteredContacts = this.props.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.props.filter.toLowerCase())
    );
    return (
      <ol className={style.contacts}>
        {filteredContacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ol>
    );
  }
}
export default ContactList;
