const React = require('react');

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        email: null,
        mobile: null,
      },
      formErrors: {
        email: null,
        mobile: null,
      }
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log('e', e);
    console.log('target', e.target);
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    alert('A name was submitted: ' + this.state.value);
    e.preventDefault();
  }

  render() {
    const { props } = this;
    return (
      <form onSubmit={this.handleSubmit}>
        {props.children}
      </form>
    )
  }
}

module.exports = Form;