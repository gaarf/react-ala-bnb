import React from 'react';

function provideBitcoinPrice({ currency }) {
  const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

  const fetchBitcoinPricePromise = async () => {

    try {
      const result = await window.fetch(url);
      const json = await result.json();
      return json.bpi[currency].rate;
    } catch (e) {
      console.log(e);
      return 0;
    }

  };

  return function HOC(Component) {
    return function WrappedComponent() {
      return <Component fetchBitcoinPricePromise={fetchBitcoinPricePromise} />;
    };
  }
}

export default provideBitcoinPrice;