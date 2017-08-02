/* @flow */
import React from "react";
import { Router, Scene } from "react-native-router-flux";
import { connect } from "react-redux";

/* Containers */
import GlobalContainer from "../modules/global/containers/GlobalContainer";

import FirstContainer from "../modules/main/containers/FirstContainer";
import SecondContainer from "../modules/main/containers/SecondContainer";
import ThirdContainer from "../modules/main/containers/ThirdContainer";

const RouterWithRedux = connect()(Router);
const RouterComponent = () => {
  console.log("Rendering router");
  return (
    <RouterWithRedux>
      <Scene key="root" component={GlobalContainer}>
        {/* Main */}
        <Scene key="first" initial component={FirstContainer} />
        <Scene key="second" component={SecondContainer} />
        <Scene key="third" component={ThirdContainer} />
      </Scene>
    </RouterWithRedux>
  );
};

export default RouterComponent;
