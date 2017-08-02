/* @flow */
"use strict";

import React from "react";
import { AppRegistry, StyleSheet, View, Text } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./system/ConfigureStore";
import Router from "./system/Router";

import pack from "../package";
var VERSION = pack.version;

export default function native(platform: string) {
  let app = React.createClass({
    render() {
      const store = configureStore();
      return (
        <Provider store={store}>
          <Router />
        </Provider>
      );
    }
  });

  AppRegistry.registerComponent("simple_redux", () => app);
}
