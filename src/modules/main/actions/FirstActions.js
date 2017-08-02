import * as constant from "./constant";
/* Normal Ation */
export const buttonToggle = () => ({ type: constant.FIRST_BUTTON_CLICK });
export const valueIncrease = () => ({
  type: constant.FIRST_VALUE_INCREASE
});
export const valueDecrease = () => ({
  type: constant.FIRST_VALUE_DECREASE
});

/* Action with Thunk */
export const changeValueByPage = (value, page) => (
  dispatch: Function,
  getState: Function
) => {
  const globalState = getState();
  let action = "";
  switch (page) {
    case 1:
      action = constant.FIRST_VALUE_CHANGE;
      break;
    case 2:
      action = constant.SECOND_VALUE_CHANGE;
      break;
    case 3:
      action = constant.THIRD_VALUE_CHANGE;
      break;
  }
  dispatch({ type: action, value: value + 1 });
};
