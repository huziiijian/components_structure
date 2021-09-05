import React from "react";
import CountNumber from "./CountNumber";
import ChangeTheme from "./ChangeTheme";

const Stepper = () => {
  return (
    <ChangeTheme
      initColor={"white"}
      render={({ theme, changeTheme }) => (
        <div
          style={{
            backgroundColor: theme,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CountNumber
            initNumber={0}
            render={({ count, add, minus }) => {
              // 属性名不同不影响逻辑复用
              const num = count;
              const addNum = add;
              const minusNum = minus;
              return (
                <>
                  <h1>You clicked *{num}* times</h1>
                  <h1 onClick={addNum}>add 1</h1>
                  <h1 onClick={minusNum}>minus 1</h1>
                  <h1 onClick={changeTheme}>change background</h1>
                </>
              );
            }}
          ></CountNumber>
        </div>
      )}
    ></ChangeTheme>
  );
};
export default Stepper;
