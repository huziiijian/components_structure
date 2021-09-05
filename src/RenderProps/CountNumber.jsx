import React from "react";

class CountNumber extends React.Component {
  state = { count: this.props.initNumber };
  add = () => this.setState({ count: this.state.count + 1 });
  minus = () => this.setState({ count: this.state.count - 1 });
  render() {
    return this.props.render({
      count: this.state.count,
      add: this.add.bind(this),
      minus: this.minus.bind(this),
    });
  }
}

export default CountNumber;
