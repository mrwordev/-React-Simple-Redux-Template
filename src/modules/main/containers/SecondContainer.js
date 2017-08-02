/* @flow */
import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/SecondActions";
import SecondScene from "../components/composites/SecondScene";

// import type props from '../components/composites/ProfileScene';

const SecondContainer = (props: Object) => {
  return <SecondScene {...props} />;
};

const mapStateToProps = (state: Object) => {
  return {
    ...state,
    value: state.second.value,
    button: state.second.button
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
      dispatch(actions.changeValueByPage(2, 1));
    }
  };
};
export { SecondContainer };
export default connect(mapStateToProps, mapDispatchToProps)(SecondContainer);
