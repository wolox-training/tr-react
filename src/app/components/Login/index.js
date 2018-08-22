import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Login from './layout';

class LoginContainer extends Component {
  submit = values => {
    console.log(values);
  };
  render() {
    return (
      <Login
        onSubmit={this.submit}
        pristine={this.props.pristine}
        reset={this.props.reset}
        submitting={this.props.submitting}
      />
    );
  }
}

LoginContainer.propTypes = {
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool
};

export default LoginContainer;
