const React = require('react');

const Input = ({ label, name, type, value, onChange }) => {
  return (
    <label>
      {label}: 
      <input type={type || 'text'} name={name} value={value} onChange={onChange} />
    </label>
  );
};

module.exports = Input;