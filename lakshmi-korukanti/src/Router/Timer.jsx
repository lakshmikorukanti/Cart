import React, { Component } from "react";
export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hrs: 24,
      min: 60,
      sec: 60,
    };
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.handleTick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  handleTick = () => {
    let { hrs, min, secs } = this.state;
    if (this.state.sec > 0) {
      this.setState({
        sec: this.state.sec - 1,
      });
    } else if (
      this.state.hrs > 0 &&
      this.state.min > 0 &&
      this.state.sec == 0
    ) {
      this.setState({
        hrs: this.state.hrs,
        min: this.state.min - 1,
        sec: 60,
      });
    } else if (
      this.state.hrs > 0 &&
      this.state.min == 0 &&
      this.state.sec == 0
    ) {
      this.setState({
        hrs: this.state.hrs - 1,
        min: 60,
        sec: 60,
      });
    } else if (
      this.state.hrs == 0 &&
      this.state.min == 0 &&
      this.state.sec == 0
    ) {
      this.setState({
        hrs: 0,
        sec: 0,
        min: 0,
      });
    }
  };

  render() {
    return (
      <>
        <div style={{ float: "right" }}>
          <h4>
            <span style={{ color: "black" }}> {this.state.hrs}</span> Hrs{" "}
            <span style={{ color: "black" }}> {this.state.min}</span> Mins{" "}
            <span style={{ color: "black" }}> {this.state.sec}</span> Secs
          </h4>
        </div>
      </>
    );
  }
}
