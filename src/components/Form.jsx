import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../components/phoneBook.module.css';

const Form = ({ onSubmit }) => {
  const initialState = {
    name: '',
    number: '',
  };

  const [state, setState] = useState({ ...initialState });

  const { name, number } = state;

  // Якщо робити по одному хуку на кожне значення:
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  const onChange = event => {
    const { name, value } = event.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setState({ ...initialState });
  };

  return (
    <>
      <form className={styles.block} onSubmit={handleSubmit}>
        <label htmlFor="get-name">
          <p className={styles.name}>Name</p>
          <input
            value={name}
            onChange={onChange}
            // Якщо по одному хуку:
            // onChange={event => {
            //   setName(event.target.value);
            // }}
            className={styles.input}
            placeholder="Name of contact"
            id="get-name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="get-number">
          <p className={styles.name}>Number</p>
          <input
            id="get-number"
            onChange={onChange}
            className={styles.input}
            placeholder="Number of contact"
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
