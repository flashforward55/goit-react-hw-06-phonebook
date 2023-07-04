import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ContactListItems from './ContactListItems';
import { ContactListContainer } from './ContactList.styled';

const getVisibleContacts = (items, filter) =>
  items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

const ContactList = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const contacts = getVisibleContacts(items, filter);
  return (
    <ContactListContainer>
      {contacts.length ? (
        contacts.map(({ id, name, number }) => (
          <ContactListItems key={id} id={id} name={name} number={number} />
        ))
      ) : (
        <p>No contacts</p>
      )}
    </ContactListContainer>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
};

export default ContactList;
