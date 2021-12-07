import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
export default class Form extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleAddName = e => {
    e.preventDefault();

    if (this.state.name) {
      this.setState({
        contacts: [
          ...this.state.contacts,
          { name: this.state.name, id: uuidv4() },
        ],
      });
    }
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form>
          <label>
            Name
            <br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
          <button onClick={this.handleAddName}>Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
        </div>
      </div>
    );
  }
}
