import React from 'react';
import Countdown from 'react-countdown';

export default class Timer2 extends React.Component {
  render() {
    return <Countdown date={'2020-06-20T23:59:59'} />;
  }
}
