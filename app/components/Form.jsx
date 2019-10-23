const React = require('react');

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {},
      formErrors: {},
    };
    
    this.handleChange = this.handleChange.bind(this);
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
    
    const validForm = Object.keys(state.formErrors).length !== 0 && this.checkFormValidity(state.formErrors);
    return (
      <form onSubmit={(e) => {
          e.preventDefault();
          if (Object.keys(state.formErrors).length !== 0) {
           props.onValidationError(state.formErrors); 
          }
          props.onSubmit(state.formData);
        }}>
        {children}
        <input type="submit" disabled={!validForm} value="Submit" />
      </form>
    )
  }
}

module.exports = Form;