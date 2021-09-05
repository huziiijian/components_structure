import React from "react";
import getRandomColor from '../utils/ColorHelper'

class ChangeTheme extends React.Component {
  state = { theme: this.props.initColor };
  changeTheme = () => this.setState({ theme: getRandomColor() });
  render() {
    return this.props.render({
      theme: this.state.theme,
      changeTheme: this.changeTheme.bind(this),
    });
  }
}

export default ChangeTheme;
