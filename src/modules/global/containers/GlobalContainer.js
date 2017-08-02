/* @flow */
import React from "react";
import { connect } from "react-redux";
import GlobalScene from "../components/composites/GlobalScene";

const GlobalContainer = (props: Object) => {
  return <GlobalScene {...props} />;
};

export { GlobalContainer };
export default connect(null, null)(GlobalContainer);
