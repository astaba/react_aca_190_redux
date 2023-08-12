import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";
import { actIncrement, actDecrement } from "../store/store";

const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(actIncrement(1));
  };
  const handleDecrement = () => {
    dispatch(actDecrement(1));
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
