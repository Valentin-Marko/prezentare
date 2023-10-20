import "./App.css";
import UseMemo from "./components/UseMemo";

import UseStateComponent from "./components/UseState";

import UseCallback from "./components/useCallback";

import UseReducer from "./components/useReducer";

import ContextFirstComp from "./components/ContextFirstComp";

import ContextSecondComp from "./components/ContextSecondCOmp";

import UseLayoutEffect from "./components/useLayoutEffect ";

import UseRef from "./components/useRef";

import { ThemeProvider } from "./context/ThemeContext";

import ComponentComposition from "./patterns/Component composition/ComponentComposition";

import PureComp from "./patterns/Pure Components/PureComponent";

function App() {
  return (
    <>
      {/* <UseStateComponent /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <UseReducer /> */}

      {/* <UseRef /> */}
      {/* <UseLayoutEffect /> */}

      {/* <ThemeProvider>
        <div>
          <ContextFirstComp />
          <ContextSecondComp />
        </div>
      </ThemeProvider> */}

      {/* <ComponentComposition /> */}

      <PureComp />
    </>
  );
}

export default App;
