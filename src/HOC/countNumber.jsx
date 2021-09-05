import React from "react";

const countNumber = (initNumber) => (WrappedComponent) =>
  class CountNumber extends React.Component {
    state = { count: initNumber };

    add = () => this.setState({ count: this.state.count + 1 });

    minus = () => this.setState({ count: this.state.count - 1 });

    render() {
      return (
        <WrappedComponent
          {...this.props}
          count={this.state.count}
          add={this.add.bind(this)}
          minus={this.minus.bind(this)}
        />
      );
    }
  };

export default countNumber;
