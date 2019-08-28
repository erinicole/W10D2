import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

componentDidMount() {
  this.interval = setInterval(this.tick.bind(this), 1000);
}

componentWillUnmount() {
  clearInterval(this.interval);
  this.interval = 0;
}

  render() {
    return (
      <div class="clock">
        <h1>Time: {this.state.date.getHours()} :  {this.state.date.getMinutes()} : {this.state.date.getSeconds()}
        <br></br>Date: {this.state.date.toDateString()}</h1>
      </div>
    );
  }

  tick() {
    (this.setState({date: new Date()}));
  }
  

}

export default Clock;