const React = require('react');

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      formErrors: {},
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value,
      }
    });
  }
  
  checkFormValidity(obj) {
    for (var key in obj) {
      if (obj[key] !== null && obj[key] != "")
        return false;
    }
      return true;
  }
  
  handleSubmit(e) {
    const { props, state } = this;
    e.preventDefault();
    const errors = Object.assign({}, state.formErrors);
    props.children.forEach((child) => {
      console.log('child', child);
      const childName = child.props.name;
      if (child.props.required && !(state.formData[childName] && state.formData[childName].trim())) {
        errors[childName] = `${child.props.label} is required!`;
      }
    })
    props.onValidationError(errors);
    props.onSubmit(state.formData);
  }

  render() {
    const { props, state } = this;
    const children = React.Children.map(props.children, child => React.cloneElement(child, {
      onChange: (e) => {
        this.handleChange(e);
        if (child.props.validate) {
          const error = child.props.validate(e.target.value);
          this.setState({
            formErrors: {
              ...this.state.formErrors,
              [child.props.name]: error,
            },
          });
        }
      },
      value: state.formData[child.props.name],
    }));
    
    // const validForm = Object.keys(state.formErrors).length === children.length && this.checkFormValidity(state.formErrors);
    return (
      <form onSubmit={this.handleSubmit}>
        {children}
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

module.exports = Form;