import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../../components/Form';
import Contacts from '../../components/Contacts';
import Filter from '../../components/Filter';
import styles from '../../components/phoneBook.module.css';
import {
  addContact,
  deleteContact,
} from '../../redux/contacts/contacts-actions';
import { setFilter } from '../../redux/filter/filter-actions';
import {
  getFilteredContacts,
  getAllContacts,
} from '../../redux/contacts/contacts-selectors';
import { getFilter } from '../../redux/filter/filter-selectors';

const Phonebook = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  const allContacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

  const isDublicate = (name, number) => {
    const normalizedName = name.toLowerCase();
    const contact = allContacts.find(item => {
      return (
        item.name.toLowerCase() === normalizedName && item.number === number
      );
    });
    return Boolean(contact);
  };

  const handleAddContact = data => {
    const { name, number, main } = data;
    console.log(filteredContacts);

    if (isDublicate(name, number)) {
      return alert(
        `Dear User, ${name} with number ${number} is already in your contacts!`
      );
    }
    const action = addContact({ name, number, main });
    dispatch(action);
  };

  const onDelete = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  const onChangeFilter = event => {
    const { value } = event.currentTarget;
    const action = setFilter(value);
    dispatch(action);
  };

  const isContacts = Boolean(filteredContacts.length);

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Phonebook</h2>
      <Form onSubmit={handleAddContact} />
      <div className={styles.blockContact}>
        <h2 className={styles.title}>Contacts</h2>
        <Filter onChangeFilter={onChangeFilter} value={filter} />
        {isContacts && (
          <Contacts contacts={filteredContacts} onDelete={onDelete} />
        )}
        {!isContacts && <p>There are no contacts in your Phone Book...</p>}
      </div>
    </div>
  );
};

export default Phonebook;
