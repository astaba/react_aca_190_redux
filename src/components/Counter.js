import classes from './Counter.module.css';

const Counter = ({count, onIncrement}) => {
  const toggleCounterHandler = () => onIncrement();

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {count} --</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
