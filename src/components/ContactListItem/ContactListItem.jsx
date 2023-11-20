import { Component } from 'react';
import css from './ContactListItem.module.css';
class ContactListItem extends Component {
  render() {
    const { contact, onDeleteContact } = this.props;

    return (
      <li>
        {contact.name} - {contact.number}
        <button
          className={css.deletebtn}
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    );
  }
}
export default ContactListItem;
