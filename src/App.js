/*
 * @Description:
 * @Autor: zijian.hu01
 * @Date: 2021-09-04 11:37:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-07 18:44:49
 */

import "./App.css";
import countNumber from "./HOC/countNumber";
import changeTheme from "./HOC/changeTheme";
import Count from "./HOC/Count";
// import Stepper from "./RenderProps/Stepper";
// import Count from "./Hooks/Count";

// HOC链式调用
const StepperCount = changeTheme("white")(countNumber(0)(Count));

function App() {
  return (
    <div className="App">
      <StepperCount />
      {/* <Stepper /> */}
      {/* <Count /> */}
    </div>
  );
}

export default App;
