import PropTypes from 'prop-types';
import styles from '../components/phoneBook.module.css';

const Contacts = ({ onDelete, contacts }) => {
  const elements = contacts.map(({ name, number, id, main }) => (
    <li key={id} style={{ fontWeight: main ? 'bold' : 'normal' }}>
      <p className={styles.nameContact}>{name}</p>
      <p className={styles.nameContact}>{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  ));

  return <ol>{elements}</ol>;
};

export default Contacts;

// Contacts.propTypes = {
//   onDelete: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf({
//     id: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     main: PropTypes.bool.isRequired,
//   }),
// };
