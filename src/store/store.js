import { createStore } from "redux";

const INITIAL_STATE = {
  counter: 0,
  isShown: true,
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const TOGGLE = "TOGGLE";

export const actIncrement = (count) => ({
  type: INCREMENT,
  count,
});
export const actDecrement = (count) => ({
  type: DECREMENT,
  count,
});
export const actToggle = () => ({
  type: TOGGLE,
});

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + action.count };
    case DECREMENT:
      return { ...state, counter: state.counter - action.count };
    case TOGGLE:
      return { ...state, isShown: !state.isShown };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
