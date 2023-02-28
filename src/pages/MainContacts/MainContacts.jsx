import { useSelector } from 'react-redux';
import { getMainContacts } from '../../redux/contacts/contacts-selectors';

const MainContacts = () => {
  const mainContacts = useSelector(getMainContacts);

  const elements = mainContacts.map(({ id, name, number }) => (
    <li key={id}>
      <p>{name}</p>
      <p>{number}</p>
    </li>
  ));
  return <ol>{elements}</ol>;
};

export default MainContacts;
