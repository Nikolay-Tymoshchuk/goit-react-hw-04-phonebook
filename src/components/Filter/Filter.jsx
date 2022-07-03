import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
export const Filter = ({ value, onChange }) => {
  const inputIdGenerate = nanoid();
  return (
    <label htmlFor={inputIdGenerate}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        id={inputIdGenerate}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
