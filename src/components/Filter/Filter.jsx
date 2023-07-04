import PropTypes from 'prop-types';
import { Label, FilterInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/contactSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const filterChange = e => {
    dispatch(filterContact(e.currentTarget.value));
  };
  return (
    <Label>
      Filter contacts by name
      <FilterInput
        type="name"
        value={filter}
        onChange={filterChange}
        placeholder="Search contacts..."
      />
    </Label>
  );
};

/* Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}; */

export default Filter;
