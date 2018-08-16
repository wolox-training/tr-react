import React from 'react';

import Board from './components/Board';
import styles from './styles.scss';

class Game extends React.Component {
  render() {
    return (
      <div className={styles.game}>
        <div className={styles.gameBoard}>
          <Board />
        </div>
        <div className={styles.gameInfo}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
export default Game;
