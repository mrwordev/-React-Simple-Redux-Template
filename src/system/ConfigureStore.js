/* @flow */
"use strict";

import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducer from "../reducers";

const createStoreWithMiddleware = applyMiddleware(thunk, createLogger())(
  createStore
);

export default function configureStore(initialState: any) {
  return createStoreWithMiddleware(reducer, initialState);
}
