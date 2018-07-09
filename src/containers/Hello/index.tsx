import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HelloBtn from '../../components/HelloBtn';
import MsEee from '../../components/MsEee';
import { incrementClick, decrementClick } from '../../store/hello';
import { RootState } from '../../store';

export interface PropsFromState {
  count: number;
}

export interface PropsFromDispatch {
  incrementClick: () => void;
  decrementClick: () => void;
}

class HelloContainer extends React.Component<PropsFromState & PropsFromDispatch> {
  static propTypes = {
    count: PropTypes.number.isRequired,
    incrementClick: PropTypes.func.isRequired,
    decrementClick: PropTypes.func.isRequired,
  };

  handleClickUp = () => {
    this.props.incrementClick();
  };

  handleClickDown = () => {
    this.props.decrementClick();
  };

  render() {
    const { count } = this.props;

    return (
      <>
        <h1>Hello world! clicks={count}</h1>
        <HelloBtn onClick={this.handleClickUp}>&uarr;</HelloBtn>
        <HelloBtn onClick={this.handleClickDown}>&darr;</HelloBtn>
        <MsEee />
      </>
    );
  }
}

export default connect<PropsFromState, PropsFromDispatch>(
  (s: RootState) => ({
    count: s.hello.clicks,
  }),
  {
    incrementClick,
    decrementClick,
  },
)(HelloContainer);
