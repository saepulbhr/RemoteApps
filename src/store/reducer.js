import { CURRENT_SPEED, CHANGE_SPEED,LOGIN_SUCCESS,LOGIN_FAIL,USER_LOADED } from "./types";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default (state, action) => {
  switch (action.type) {
    case CHANGE_SPEED:
      return {
        ...state,
        currentSpeed: action.payload,
      };

      case LOGIN_SUCCESS:
        AsyncStorage.setItem('token', action.payload);
        return{
          ...state,
          token:action.payload
        }

    default:
      return state;
  }
};
