/*
 * @Description:
 * @Autor: zijian.hu01
 * @Date: 2021-09-04 11:37:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-06 00:20:59
 */

import "./App.css";
import countNumber from "./HOC/countNumber";
import changeTheme from "./HOC/changeTheme";
import Count from "./HOC/Count";
// import Stepper from "./RenderProps/Stepper";
// import Count from "./Hooks/Count";

// HOC
const StepperComponent = changeTheme("white")(countNumber(0)(Count));

function App() {
  return (
    <div className="App">
      <StepperComponent />
      {/* <Stepper /> */}
      {/* <Count /> */}
    </div>
  );
}

export default App;
