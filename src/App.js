import React from "react";
import { Provider } from "react-redux";
import reducer from "./store/reducer/index";
import { createStore } from "redux";
import Todo from "./Todo/index";

const store = createStore(reducer);
const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};
export default App;
