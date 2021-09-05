import React from "react";
import getRandomColor from "../utils/ColorHelper";

const changeTheme = (initColor) => (WrappedComponent) =>
  class ChangeTheme extends React.Component {
    state = {
      theme: initColor,
    };
    changeTheme = () => this.setState({ theme: getRandomColor() });
    render() {
      return (
        <WrappedComponent
          {...this.props}
          theme={this.state.theme}
          changeTheme={this.changeTheme.bind(this)}
        />
      );
    }
  };

export default changeTheme;
