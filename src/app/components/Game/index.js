import React, { Component, Fragment } from 'react';

import NavBar from '../NavBar/layout';

import Board from './components/Board';
import styles from './styles.scss';

class Game extends Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    xIsNext: true,
    stepNumber: 0,
    winner: null,
    status: `Next player: X`
  };

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) && this.state.stepNumber + 1 === this.state.history.length) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
    if (this.calculateWinner(squares)) {
      this.setState({
        winner: squares[i],
        status: `Winner: ${squares[i]}`
      });
    } else {
      this.setState({
        status: `Next player: ${!this.state.xIsNext ? 'X' : 'O'}`
      });
    }
  }

  jumpTo(step) {
    const { history } = this.state;
    const current = history[step];
    const winner = this.calculateWinner(current.squares);
    if (winner) {
      this.setState({
        stepNumber: step,
        xIsNext: step % 2 === 0,
        status: `Winner: ${winner}`
      });
    } else {
      this.setState({
        stepNumber: step,
        xIsNext: step % 2 === 0,
        status: `Next player: ${step % 2 === 0 ? 'X' : 'O'}`
      });
    }
  }

  calculateWinner = squares => {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  render() {
    const { history, status, stepNumber } = this.state;
    const current = history[stepNumber];
    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    return (
      <Fragment>
        <NavBar />
        <div className={`${styles.game} m-left-2`}>
          <div className={styles.gameBoard}>
            <Board squares={current.squares} onClick={i => this.handleClick(i)} />
          </div>
          <div className={styles.gameInfo}>
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Game;
