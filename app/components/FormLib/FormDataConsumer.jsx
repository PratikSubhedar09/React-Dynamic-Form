const React = require('react');

const FormDataConsumer = ({ children, formData }) => {
  const newChildren = React.Children.map(children, child => React.cloneElement(child, {
    formData: formData,
  }));
  return (
    <React.Fragment>
      {newChildren}
    </React.Fragment>
  );
};

module.exports = FormDataConsumer;