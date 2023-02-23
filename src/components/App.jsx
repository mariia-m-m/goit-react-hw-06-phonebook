import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import styles from '../components/phoneBook.module.css';
import Navbar from '../Navbar/Navbar';
const Phonebook = lazy(() => import('../pages/Phonebook/Phonebook'));
const MainContacts = lazy(() => import('../pages/MainContacts/MainContacts'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
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
    <>
      <Navbar />
      <Suspense>
        <Routes>
          <Route exact path="/" element={<Phonebook />} />
          <Route path="/movies" element={<MainContacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
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
    </>
  );
};
