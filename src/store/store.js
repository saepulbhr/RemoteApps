import React, { useReducer, useState } from "react";
import { CHANGE_STATUS, CHANGE_SPEED } from "./types";
import StoreContext from "./context";
import reducer from "./reducer";

function Store({ children }) {
  const [initialState, setInitialState] = useState({
    currentSpeed: 30,
    loading: false,
    status: false,
  });

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChangeSpeed = (payload) => {
    return dispatch({ type: CHANGE_SPEED, payload: payload });
  };

  const handleChangeStatus = (payload) =>
    dispatch({ type: CHANGE_STATUS, payload: payload });

  const values = {
    speed: state.currentSpeed,
    handleChangeSpeed,
    handleChangeStatus,
    loading: state.loading,
    status: state.status,
  };

  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
}

export default Store;
