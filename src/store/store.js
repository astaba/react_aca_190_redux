import { createStore } from "redux";

const INITIAL_STATE = {
  counter: 0,
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const actIncrement = (count) => ({
  type: INCREMENT,
  count,
});
export const actDecrement = (count) => ({
  type: DECREMENT,
  count,
});

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + action.count };
    case DECREMENT:
      return { counter: state.counter - action.count };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
