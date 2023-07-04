import PropTypes from 'prop-types';
import {
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactListItems.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

const ContactListItems = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const contactsDelete = id => dispatch(deleteContact(id));

  return (
    <ContactListItem id={id}>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>

      <DeleteButton type="submit" onClick={() => contactsDelete(id)}>
        Delete
      </DeleteButton>
    </ContactListItem>
  );
};

ContactListItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  number: PropTypes.string.isRequired,
};

export default ContactListItems;
