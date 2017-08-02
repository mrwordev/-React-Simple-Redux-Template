/* @flow */
import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/ThirdActions";
import ThirdScene from "../components/composites/ThirdScene";

// import type props from '../components/composites/ProfileScene';

const ThirdContainer = (props: Object) => {
  return <ThirdScene {...props} />;
};

const mapStateToProps = (state: Object) => {
  return {
    ...state,
    value: state.third.value,
    button: state.third.button
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
      dispatch(actions.changeValueByPage(3, 1));
    }
  };
};
export { ThirdContainer };
export default connect(mapStateToProps, mapDispatchToProps)(ThirdContainer);
