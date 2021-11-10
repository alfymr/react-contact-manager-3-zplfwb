import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// addpersonform  
function AddPersonForm(props) {
  const [ person, setPerson ] = useState('');
    // handleChange 
  function handleChange(e) {
    setPerson(e.target.value);
  }
    // handleSubmit
  function handleSubmit(e) {
    props.handleSubmit(person);
    setPerson('');
    e.preventDefault();
  }
  // form 
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Add new contact" 
        onChange={handleChange} 
        value={person} />
      <button type="submit">Add</button>
    </form>
  );
}
// PeopleList
function PeopleList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}
//  ContactManager
function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);
// addPerson
  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}
// contacts
const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];
// render
ReactDOM.render(
  <ContactManager data={contacts} />, 
  document.getElementById('root')
);