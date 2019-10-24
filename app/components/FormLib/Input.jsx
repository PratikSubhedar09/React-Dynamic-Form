const React = require('react');
require('../../styles.css');

const Input = ({ label, name, type, value, error, onChange, required }) => {
  return (
    <div className="form-input-row">
      <label>
        {label}: {required && <span className="mandatory">*</span>}
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