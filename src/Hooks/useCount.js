/*
 * @Description:
 * @Autor: zijian.hu01
 * @Date: 2021-09-05 23:18:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-05 23:27:35
 */

import { useState } from "react";

const useCount = (initNumber) => {
  const [count, setCount] = useState(initNumber);
  const addCount = () => setCount(count + 1);
  const minusCount = () => setCount(count - 1);
  return [count, addCount, minusCount];
};

export default useCount;
