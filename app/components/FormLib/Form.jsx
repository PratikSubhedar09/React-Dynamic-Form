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
      },
      formErrors: {
        ...this.state.formErrors,
        [e.target.name]: null,
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
      const childName = child.props.name;
      console.log('handleSubmit-childName', childName);
      if (child.props.required && !(state.formData[childName] && state.formData[childName].trim())) {
        errors[childName] = `${child.props.label} is required!`;
      } else if (child.props.validate) {
        errors[childName] = child.props.validate(state.formData[childName]);
      }
    })
    this.setState({
      formErrors: errors,
    }, () => {
      props.onValidationError(errors);
      props.onSubmit(state.formData);
    })
  }

  render() {
    const { props, state } = this;
    const children = React.Children.map(props.children, child => {
      const props = {
        onChange: this.handleChange,
        value: state.formData[child.props.name],
        error: state.formErrors[child.props.name],
        formData: state.formData,
      }
      if (React.isValidElement(child)) {
          return React.cloneElement(child, props)
      } else {
        return child({...props})
      }
    });
    
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