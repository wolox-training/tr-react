import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

class Square extends React.Component {
  handlerAlert() {
    alert('click');
  }
  render() {
    return (
      <button className={styles.square} onClick={this.handlerAlert}>
        {this.props.value}
      </button>
    );
  }
}
Square.propTypes = {
  value: PropTypes.number
};
export default Square;
