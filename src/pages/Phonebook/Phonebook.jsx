import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from '../../components/Form';
import Contacts from '../../components/Contacts';
import Filter from '../../components/Filter';
import styles from '../../components/phoneBook.module.css';
const Phonebook = () => {
  const [contacts, setContacts] = useState(() => {
    const books = JSON.parse(localStorage.getItem('contacts'));
    return books ? books : [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const isDublicate = (name, number) => {
    const normalizedName = name.toLowerCase();
    const contact = contacts.find(item => {
      return (
        item.name.toLowerCase() === normalizedName && item.number === number
      );
    });

    return Boolean(contact);
  };

  const formSubmitHandler = data => {
    const { name, number } = data;
    if (isDublicate(name, number)) {
      return alert(
        `Dear User, ${name} with number ${number} is already in your contacts!`
      );
    }

    setContacts(prevState => {
      const newContact = {
        id: nanoid(3),
        name,
        number,
      };
      return [newContact, ...prevState];
    });
    return true;
  };

  const onDelete = id => {
    setContacts(prevState => {
      const newContacts = prevState.filter(user => user.id !== id);
      return newContacts;
    });
  };

  const onChangeFilter = event => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  const onFilter = () => {
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
    return result;
  };

  const isContacts = Boolean(contacts.length);

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Phonebook</h2>
      <Form onSubmit={formSubmitHandler} />
      <div className={styles.blockContact}>
        <h2 className={styles.title}>Contacts</h2>
        <Filter onChangeFilter={onChangeFilter} />
        {isContacts && <Contacts onFilter={onFilter} onDelete={onDelete} />}
        {!isContacts && <p>There are no contacts in your Phone Book...</p>}
      </div>
    </div>
  );
};

export default Phonebook;
