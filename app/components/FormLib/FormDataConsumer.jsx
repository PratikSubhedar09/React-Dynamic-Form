const React = require('react');

class FormDataConsumer extends React.Component {
  render() {
    const { props: { children, ...rest } } = this;
    console.log('FormDataConsumer-rest', rest);
    return (
      <React.Fragment>
        {children({...rest})}
      </React.Fragment>
    )
  }
};

module.exports = FormDataConsumer;