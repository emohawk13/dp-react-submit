import React, { Component } from "react";
import "../styles/common-styles.scss";
import Button from "./Button";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: false,
      time: new Date().toLocaleTimeString(),
    };
    this.timer = null;
  }

  componentDidMount() {
    if (this.state.isMounted) {
      this.startClock();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isMounted !== this.state.isMounted) {
      if (this.state.isMounted) {
        this.startClock();
      } else {
        this.stopClock();
      }
    }
  }

  componentWillUnmount() {
    this.stopClock();
  }

  startClock = () => {
    this.timer = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  };

  stopClock = () => {
    clearInterval(this.timer);
  };

  toggleMount = () => {
    this.setState((prevState) => ({ isMounted: !prevState.isMounted }));
  };

  render() {
    const { isMounted, time } = this.state;

    return (
      <div className="clock-widget">
        <Button
          label={isMounted ? "Unmount Clock" : "Mount Clock"}
          onClick={this.toggleMount}
          className="clock-toggle-button"
        />
        {isMounted && <div className="clock-display">{time}</div>}
      </div>
    );
  }
}

export default Clock;
