//import PropTypes from 'prop-types';
import { ContactListContainer } from './ContactList.styled';
import ContactListItems from './ContactListItems';
import { useSelector } from 'react-redux';

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

/* ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
}; */

export default ContactList;
