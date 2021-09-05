import React from "react";

const Count = ({ count, add, minus, theme, changeTheme }) => {
  return (
    <div
      style={{
        backgroundColor: theme,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>You clicked *{count}* times</h1>
      <h1 onClick={add}>add 1</h1>
      <h1 onClick={minus}>minus 1</h1>
      <h1 onClick={changeTheme}>change background</h1>
    </div>
  );
};

export default Count;
