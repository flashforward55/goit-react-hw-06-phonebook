import PropTypes from 'prop-types';
import {
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactListItems.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

const ContactListItems = ({ id, nameU, number }) => {
  const dispatch = useDispatch();
  const contactsDelete = id => dispatch(deleteContact(id));

  return (
    <ContactListItem id={id}>
      <ContactName>{nameU}</ContactName>
      <ContactNumber>{number}</ContactNumber>

      <DeleteButton type="submit" onClick={() => contactsDelete(id)}>
        Delete
      </DeleteButton>
    </ContactListItem>
  );
};

ContactListItems.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    nameU: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  contactsDelete: PropTypes.func.isRequired,
};

export default ContactListItems;
