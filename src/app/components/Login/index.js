import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actionCreators as loginActions } from '../../../redux/Login/actions';

import Login from './layout';

class LoginContainer extends Component {
  setNotification = message => {
    if (message) {
      this.props.offNotification();
    }
  };
  submit = values => {
    this.props.checkLogin(values);
  };

  render() {
    this.setNotification(this.props.error);
    return (
      <Login
        onSubmit={this.submit}
        pristine={this.props.pristine}
        reset={this.props.reset}
        submitting={this.props.submitting}
        errorVal={this.props.error}
        loadingForm={this.props.loading}
      />
    );
  }
}

LoginContainer.propTypes = {
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  checkLogin: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string,
  offNotification: PropTypes.func
};

const mapStateToProps = state => ({
  loading: state.login.loading,
  error: state.login.error
});

const mapDispatchToProps = dispatch => ({
  checkLogin: (...args) => {
    dispatch(loginActions.checkLogin(args));
  },
  offNotification: () => {
    dispatch(loginActions.offNotification());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
