import { useState } from 'react';
import { useAddContactMutation, useEditContactMutation, useGetContactsQuery } from 'redux/contactsApi';
import { notify } from 'helpers/notification';
import { ImUser, ImPhone } from "react-icons/im";
import { Form, FormTitle, Input, Label } from './ContactForm.styled';
import { Loader } from 'components/Loader/Loader';
import { SubmitButton } from 'components/SubmitButton/SubmitButton.styled';

export const ContactForm = ({id, prevName, prevNumber, onClose }) => {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();
  const [editContact] = useEditContactMutation();

  const [name, setName] = useState(prevName || '');
  const [number, setNumber] = useState(prevNumber || '');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default:
        return;
    }
  };

  const handleAddContact = event => {
    event.preventDefault();

    const normalisedName = name.toLowerCase();
    const isInContacts = contacts.find(item => item.name.toLowerCase() === normalisedName);

    if (isInContacts) {
      notify(`${name} is already in contacts`);
    } else {
      const contact = { name, number };
      addContact(contact);
    };
    reset();
  }

  const handleEditContact = event => {
    event.preventDefault();

    const normalisedName = name.toLowerCase();
    const isInContacts = contacts.find(item => ((item.name.toLowerCase() === normalisedName) && (item.id !== id)));

    if (isInContacts) {
      notify(`${name} is already in contacts`);
    } else {
      const contact = { id, name, number };
      editContact(contact);
      onClose();
    };
    
  }

  const reset = () => {
    setName('');
    setNumber('');
  }

  return (
    <>
      <Form onSubmit={!id ? handleAddContact : handleEditContact}>
        <FormTitle>
          {!id ? 'Add your contacts here' : 'Edit contact'}
        </FormTitle>
        <Label><span><ImUser/> Name:</span><Input
          type="text"
          value={name}
          name='name'
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        /></Label>
        <Label><span><ImPhone/> Number:</span><Input
          type="tel"
          value={number}
          name='number'
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        /></Label>
        <SubmitButton
          type='submit'
          disabled={isLoading}
        >
          {!isLoading
            ? 'Save'
            : <Loader message='Please wait...'/>
          }
        </SubmitButton>
      </Form>
    </>
  )
};