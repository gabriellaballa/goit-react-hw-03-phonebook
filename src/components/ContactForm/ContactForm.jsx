import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name.trim(),
      number: this.state.number.trim(),
    };

    this.props.onAddContact(newContact);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.addformula} onSubmit={this.handleSubmit}>
        <label>
          <span className={css.name}>Name:</span>
          <input
            className={css.input}
            type="text"
            name="name"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          <span className={css.num}>Phone Number:</span>

          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </label>

        <button className={css.addbtn} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
export default ContactForm;
