import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { actionCreators as loginActions } from '../../../redux/Login/actions';

import Login from './layout';

class LoginContainer extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.props.notificationError();
    }

    if (nextProps.logged && !nextProps.error) {
      this.props.history.push('/app');
    }
  }
  submit = values => {
    this.props.checkLogin(values);
  };

  render() {
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
  notificationError: PropTypes.func,
  logged: PropTypes.bool,
  history: PropTypes.object
};

const mapStateToProps = state => ({
  loading: state.login.loading,
  error: state.login.error,
  logged: state.login.logged
});

const mapDispatchToProps = dispatch => ({
  checkLogin: (...args) => {
    dispatch(loginActions.checkLogin(args));
  },
  notificationError: () => {
    dispatch(loginActions.offNotification());
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginContainer)
);
