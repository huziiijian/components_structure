import { useState } from "react";
import getRandomColor from "../utils/ColorHelper";

const useTheme = (initColor) => {
  const [theme, changeTheme] = useState(initColor);
  const changeBackgroundColor = () => changeTheme(getRandomColor());
  return [theme, changeBackgroundColor];
};

export default useTheme;
