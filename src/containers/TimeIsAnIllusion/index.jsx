import React from 'react';
import provideBitcoinPrice from './BitcoinPrice';
import HelloBtn from '../../components/HelloBtn';

class TimeIsAnIllusion extends React.Component {
  state = {
    text: 'click me please!',
  };

  doSomething = () => {
    this.props.fetchBitcoinPricePromise().then(price => {
      this.setState({
        text: `The price is ${price}`,
      });
    });
  };

  render() {
    const { text } = this.state;

    return (
      <div>
        <HelloBtn onClick={this.doSomething}>{text}</HelloBtn>
      </div>
    );
  }
}

export default provideBitcoinPrice({
  currency: 'sldjfhdsljkf'
})(TimeIsAnIllusion);
