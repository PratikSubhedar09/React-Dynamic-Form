const React = require('react');
const Form = require('./Form');

class Page extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    const { props } = this;
    return (
      <Form handleSubmit={this.handleSubmit}>
        <Input label="Email" type="email" name="email" />
        <Input label="Mobile" type="tel" name="mobile" />
        <input type="submit" value="Submit" />
      </Form>
    )
  }
}

module.exports = Page;