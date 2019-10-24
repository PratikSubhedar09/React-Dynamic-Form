const React = require('react');

const FormDataConsumer = ({ children, formData }) => {
  const newChildren = React.Children.map(children, child => {
    console.log('child', child);
    return React.cloneElement(child, {
      formData: formData,
    })
  });
  console.log('FormDataConsumer', newChildren);
  return (
    <React.Fragment>
      {newChildren}
    </React.Fragment>
  );
};

module.exports = FormDataConsumer;