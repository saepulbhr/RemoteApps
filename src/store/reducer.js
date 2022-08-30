import { CURRENT_SPEED, CHANGE_SPEED } from "./types";

export default (state, action) => {
  switch (action.type) {
    case CHANGE_SPEED:
      return {
        ...state,
        currentSpeed: action.payload,
      };

    default:
      return state;
  }
};
