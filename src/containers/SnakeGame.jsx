import React from 'react';
import Game from '../helpers/Game';
import Score from '../components/Score';
import Board from '../components/Board';

class SnakeGame extends React.Component {
  state = {};

  handleButtonClick = () => {
    this.setState({
      game: new Game({
        onTick: this.handleTick,
      }),
    });
  };

  handleTick = () => {
    this.setState({
      tick: Date.now(),
    });
  };

  render() {
    const { game, tick } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleButtonClick}>
          start game
        </button>
        {game && (
          <div className="game">
            <Score game={game} tick={tick} />
            <Board game={game} tick={tick} />
          </div>
        )}
      </div>
    );
  }
}

export default SnakeGame;
