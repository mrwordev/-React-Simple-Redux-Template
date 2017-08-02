/* @flow */
import * as constant from "../actions/constant";
const INITIAL_STATE = {
  value: 0,
  button: true
};

/* Functions */
export const increaseValue = (state: Object, action: Object) => {
  return { ...state, value: state.value + 1 };
};
export const decreaseValue = (state: Object, action: Object) => {
  return { ...state, value: state.value - 1 };
};
export const changeValue = (state: Object, action: Object) => {
  return { ...state, value: action.value };
};
export const buttonToggle = (state: Object, action: Object) => {
  return { ...state, value: !state.button };
};

export default (state: Object = INITIAL_STATE, action: Object) => {
  switch (action.type) {
    case constant.SECOND_VALUE_INCREASE:
      return increaseValue(state, action);
    case constant.SECOND_VALUE_DECREASE:
      return decreaseValue(state, action);
    case constant.SECOND_VALUE_CHANGE:
      return changeValue(state, action);
    case constant.SECOND_BUTTON_CLICK:
      return buttonToggle(state, action);
  }
  return state;
};
