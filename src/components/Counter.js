import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";
import { actIncrement, actDecrement, actToggle } from "../store/store";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const isShown = useSelector((state) => state.isShown);

  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(actIncrement(1));
  };
  const handleDecrement = () => {
    dispatch(actDecrement(1));
  };

  const toggleCounterHandler = () => {
    dispatch(actToggle());
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
