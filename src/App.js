/*
 * @Description:
 * @Autor: zijian.hu01
 * @Date: 2021-09-04 11:37:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-09 15:17:51
 */

import "./App.css";
import { useState } from "react";

const App = () => {
  const [popUp, changePop] = useState(false);

  const isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

  if (isIOS) {
    document.body.addEventListener("focusin", () => {
      // 软键盘弹起事件
      changePop(true);
    });
    document.body.addEventListener("focusout", () => {
      // 软键盘关闭事件
      changePop(false);
    });
  } else {
    const orignHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
    window.onresize = () => {
      const resizeHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      changePop(orignHeight - resizeHeight > 140);
    };
  }

  return (
    <div className="App">
      <div className="top-area">
        <div className="button">顶部按钮</div>
      </div>
      <div className="left-area">
        <div className="button">左部按钮</div>
      </div>
      <div className="right-area">
        <div className="button">右部按钮</div>
      </div>
      <div className="grey-block"></div>
      <div className="green-block"></div>
      <div className="grey-block"></div>
      {popUp ? "软键盘--弹起" : "软键盘--关闭"}
      <input className="input-area" type="text" />
      <div className="wheat-block"></div>
      <div className="grey-block"></div>
      <div className="bottom-area">
        <div className="button">底部按钮</div>
      </div>
    </div>
  );
};

export default App;
