const React = require('react');
require('../../styles.css');

const Input = ({ label, name, type, value, onChange }) => {
  return (
    <div className="form-input-row">
      <label>
        {label}: 
      </label>
      <input type={type || 'text'} name={name} value={value} onChange={onChange} />
    </div>
  );
};

module.exports = Input;