import PropTypes from 'prop-types';
export const ContactList = ({ data, onClick }) => {
  return (
    <ul>
      {data.map(contact => (
        <li key={contact.id} id={contact.id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={onClick}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
