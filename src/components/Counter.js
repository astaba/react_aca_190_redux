import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Counter.module.css";
import { actDecrement, actIncrement } from "../store/store";

export class Counter extends Component {
  toggleCounterHandler = () => {};

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>-- {this.props.counter} --</div>
        <div>
          <button onClick={() => this.props.handleDecrement(1)}>Decrement</button>
          <button onClick={() => this.props.handleIncrement(1)}>Increment</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateWithProps = (state) => ({
  counter: state.counter,
});
const mapDispatchWithProps = (dispatch) => ({
  handleDecrement: (num) => dispatch(actDecrement(num)),
  handleIncrement: (num) => dispatch(actIncrement(num)),
});
export default connect(mapStateWithProps, mapDispatchWithProps)(Counter);