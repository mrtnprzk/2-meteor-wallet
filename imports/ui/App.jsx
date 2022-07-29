import React from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

export const App = () => (
  <div>
    <h1>Meteor Wallet - Galaxy</h1>
    <ContactForm/>
    <ContactList/>
  </div>
);
