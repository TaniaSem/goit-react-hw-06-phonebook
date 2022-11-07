import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice';
import { FilterBox, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <FilterBox>
      <FilterLabel htmlFor="filter">Find contact by name</FilterLabel>
      <FilterInput
        type="text"
        id="filter"
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </FilterBox>
  );
};
