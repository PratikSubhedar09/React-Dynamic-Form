const React = require('react');
const { Form, Input, FormDataConsumer } = require('./FormLib');

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validMobileRegex = RegExp(/^\d{10}$/);

class Page extends React.Component {

  handleSubmit(d) {
    console.log('form-data: ', d);
  }

  handleEmailValidation(v) {
    const error = validEmailRegex.test(v) ? null : 'Invalid Email!';
    return error;
  }
  
  handleMobileValidation(v) {
    const error = validMobileRegex.test(v) ? null : 'Invalid Mobile!';
    return error;
  }
  
  handleValidationError(e) {
    console.log('form-error: ', e);
  }
  
  render() {
    const { props } = this;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} onValidationError={this.handleValidationError}>
          <Input label="Email" name="email" validate={this.handleEmailValidation} required />
          <Input label="Mobile" name="mobile" validate={this.handleMobileValidation} required />
          <FormDataConsumer>
            {({ formData, ...rest }) => {
              console.log('formData', formData);
              return (
                <Input label="Age" name="age" />
              )
            }}
          </FormDataConsumer>
        </Form>
      </div>
    )
  }
}

module.exports = Page;