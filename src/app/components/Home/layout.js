import React from 'react';
import PropTypes from 'prop-types';

const Home = props => <h1>{`Bienvenido ${props.nameUser}`}</h1>;

Home.propTypes = {
  nameUser: PropTypes.string
};
export default Home;
