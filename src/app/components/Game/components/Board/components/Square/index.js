import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Square = props => (
  <button className={styles.square} onClick={props.onClick}>
    {props.value}
  </button>
);

export default Square;

Square.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string
};
