import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class AuthorizedRoute extends React.Component {
  componentWillMount() {}

  render() {
    const { component: Component, logged, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={props => (logged ? <Component {...props} /> : <Redirect to="/auth/login" />)}
      />
    );
  }
}

const mapStateToProps = state => ({
  logged: state.login.logged
});

export default connect(mapStateToProps)(AuthorizedRoute);
