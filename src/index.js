import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import store, { actIncrement } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const render = () => {
  root.render(
    <App
      count={store.getState().counter}
      onIncrement={() => store.dispatch(actIncrement(1))}
    />
  );
};

render();
const unsubscribe = store.subscribe(() => render());
