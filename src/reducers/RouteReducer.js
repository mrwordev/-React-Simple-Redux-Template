import { ActionConst } from 'react-native-router-flux';

const initialState = {
  scene: {},
  initialLoaded: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case ActionConst.FOCUS:
      return {
        ...state,
        scene: action.scene,
      };
    case 'INITIAL_LOADED': return {...state, initialLoaded: true}
    // ...other actions

    default:
      return state;
  }
}
