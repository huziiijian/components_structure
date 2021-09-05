/*
 * @Description:
 * @Autor: zijian.hu01
 * @Date: 2021-09-05 23:18:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-05 23:40:29
 */

import { useState } from "react";
import getRandomColor from "../utils/ColorHelper";

const useTheme = (initColor) => {
  const [theme, changeTheme] = useState(initColor);
  const changeBackgroundColor = () => changeTheme(getRandomColor());
  return [theme, changeBackgroundColor];
};

export default useTheme;
