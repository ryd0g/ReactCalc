import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    total: '',
    percent: '',
    people: '',
    totalTip: '',
    tipP: '',
  };
  handleTotal = (e) => {
    this.setState({
      total: e.target.value,
    });
  };
  handlePercent = (e) => {
    this.setState({
      percent: e.target.value,
    });
  };
  handlePeople = (e) => {
    this.setState({
      people: e.target.value,
    });
  };
  genTip = (e) => {
    e.preventDefault();
    let tip = parseFloat(this.state.total * (this.state.percent / 100)).toFixed(
      2
    );
    let totalTip = parseFloat(tip / this.state.people).toFixed(2);
    this.setState({
      totalTip: tip,
      tipP: totalTip,
    });
  };
  render() {
    return (
      <div>
        <h1>Tip Calculator</h1>
        <form onSubmit={this.genTip}>
          <label>
            Total Bill:
            <input
              type='text'
              placeholder='$'
              value={this.state.total}
              onChange={this.handleTotal}
            />
          </label>
          <label>
            Tip %:
            <input
              type='text'
              placeholder='%'
              value={this.state.percent}
              onChange={this.handlePercent}
            />
          </label>
          <label>
            Number of People:
            <input
              type='text'
              placeholder='#'
              value={this.state.people}
              onChange={this.handlePeople}
            />
          </label>
          <input type='submit' />
        </form>
        <p>Tip: ${this.state.totalTip}</p>
        <p>Tip Per Person: ${this.state.tipP}</p>
      </div>
    );
  }
}

export default App;
