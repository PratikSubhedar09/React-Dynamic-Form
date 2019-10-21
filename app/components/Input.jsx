const React = require('react');

const Input = ({ label, name, type, value, handleChange }) => (
  <label>
    {label}: 
    <input type={type} name={name} value={value} onChange={handleChange} />
  </label>
);

module.exports = Input;