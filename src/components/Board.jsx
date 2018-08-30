import React from 'react';
import PropType from 'prop-types';

export default class Board extends React.Component {
  static propTypes = {
    game: PropType.object.isRequired,
  };

  renderRow() {
    const {
      game: {
        world: { width },
      },
    } = this.props;

    return Array(width)
      .fill()
      .map((_, index) => <span key={index} className="cell" />);
  }

  render() {
    const {
      game: {
        world: { height },
      },
    } = this.props;

    return (
      <div className="board">
        {Array(height)
          .fill()
          .map((_, index) => (
            <div key={index} className="row">
              {this.renderRow()}
            </div>
          ))}
      </div>
    );
  }
}
