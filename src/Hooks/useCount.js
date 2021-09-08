import { useState } from "react";

const useCount = (initNumber) => {
  const [count, setCount] = useState(initNumber);
  const addCount = () => setCount(count + 1);
  const minusCount = () => setCount(count - 1);
  return [count, addCount, minusCount];
};

export default useCount;
