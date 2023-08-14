import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";
import { counterSliceActions } from "../slices/counter/counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counterState.counter);
  const isShown = useSelector((state) => state.counterState.isShown);

  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(counterSliceActions.increment(1));
  };
  const handleDecrement = () => {
    dispatch(counterSliceActions.decrement(1));
  };

  const toggleCounterHandler = () => {
    dispatch(counterSliceActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShown && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
