"use strict";
import { combineReducers } from "redux";

/* Import Reducer */
import RouteReducer from "./RouteReducer";
import FirstReducer from "../modules/main/reducers/FirstReducer";
import SecondReducer from "../modules/main/reducers/SecondReducer";
import ThirdReducer from "../modules/main/reducers/ThirdReducer";

const rootReducer = combineReducers({
  // launch: LaunchReducer,
  first: FirstReducer,
  second: SecondReducer,
  third: ThirdReducer,
  // data: StorageReducer,
  route: RouteReducer
});

export default rootReducer;
