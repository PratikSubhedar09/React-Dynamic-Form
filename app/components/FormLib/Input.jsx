const React = require('react');
require('../../styles.css');

const Input = ({ label, name, type, value, error, onChange }) => {
  return (
    <div className="form-input-row">
      <label>
        {label}: 
      </label>
      <input type={type || 'text'} name={name} value={value} onChange={onChange} />
      {
        error &&
        <span className="error">{error}</span>
      }
    </div>
  );
};

module.exports = Input;