import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavBar from '../NavBar';

import Home from './layout';

class HomeContainer extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Home nameUser={this.props.name} />
      </Fragment>
    );
  }
}

HomeContainer.propTypes = {
  name: PropTypes.string
};
const mapStateToProps = state => ({
  name: state.login.name
});

export default withRouter(connect(mapStateToProps)(HomeContainer));
