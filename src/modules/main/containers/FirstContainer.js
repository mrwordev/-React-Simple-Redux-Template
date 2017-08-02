/* @flow */
import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/FirstActions";
import FirstScene from "../components/composites/FirstScene";

// import type props from '../components/composites/ProfileScene';

const FirstContainer = (props: Object) => {
  return <FirstScene {...props} />;
};

const mapStateToProps = (state: Object) => {
  return {
    ...state,
    value: state.first.value,
    button: state.first.button
  };
};
const mapDispatchToProps = (dispatch: Function) => {
  return {
    increaseValue: () => {
      dispatch(actions.valueIncrease());
    },
    decreaseValue: () => {
      dispatch(actions.valueDecrease());
    },
    changeAllValue: () => {
      dispatch(actions.changeValueByPage(1, 3));
    }
  };
};
export { FirstContainer };
export default connect(mapStateToProps, mapDispatchToProps)(FirstContainer);
