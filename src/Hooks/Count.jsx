import useCount from './useCount'
import useTheme from './useTheme'

const HookCount = () => {
  const [count, addCount, minusCount] = useCount(0);
  const [theme,changeBackgroundColor] = useTheme('white');
  return (
    <div style={{ backgroundColor:theme, flex: 1, alignItems: "center", justifyContent: "center" }}>
      <h1>You clicked *{count}* times</h1>
      <h1 onClick={addCount}>add 1</h1>
      <h1 onClick={minusCount}>minus 1</h1>
      <h1 onClick={changeBackgroundColor}>change background</h1>
    </div>
  );
};
export default HookCount;
