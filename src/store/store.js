import React, { useReducer, useState,useEffect } from 'react';
import {
  CHANGE_STATUS,
  CHANGE_SPEED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED
} from './types';
import StoreContext from './context';
import reducer from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Store({ children }) {
  const [initialState, setInitialState] = useState({
    token:AsyncStorage.getItem('token'),
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

    const loadUser = () => {
      // try {
      //   const token = await AsyncStorage.getItem('token');
      //   const dekode = jwt_decode(token);
      //   return dispatch({
      //     type: USER_LOADED,
      //     payload: dekode.username,
      //   });
      // } catch (error) {
      //   throw error;
      // }
    };

  const handleSubmit = async (payload) => {
    const tempToken = { username: payload.username };

    dispatch({ type: LOGIN_SUCCESS, payload: JSON.stringify(tempToken) });

    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // };
    // try {
    //   const res = await axios.get(
    //     `${url.login}?username=${formData.username}&password=${formData.password}`,
    //     config,
    //   );

    //   if (res.data.response === 'NOT-OK') {
    //     return dispatch({
    //       type: LOGIN_FAIL,
    //       payload: res.data.response,
    //     });
    //   }

    //   dispatch({
    //     type: LOGIN_SUCCESS,
    //     payload: res.data,
    //   });
    //   loadUser();
    // } catch (err) {
    //   dispatch({
    //     type: LOGIN_FAIL,
    //     payload: err.message,
    //   });
  };

  useEffect(()=>{
    loadUser()
  },[])

  const values = {
    speed: state.currentSpeed,
    handleChangeSpeed,
    handleChangeStatus,
    handleSubmit,
    loading: state.loading,
    status: state.status,

  };

  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
}

export default Store;
