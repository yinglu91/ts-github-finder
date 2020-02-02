import React, { useReducer } from 'react';
import alertContext from './alertContext';
import alertReducer from './alertReducer';
import { AlertActionTypes, AlertReducerState, Alert } from './types';

interface Props {
  children: React.ReactNode;
}

const AlertState: React.ComponentType<Props> = props => {
  const initailState: AlertReducerState = { alert: null } as AlertReducerState;
  const [state, dispatch] = useReducer(alertReducer, initailState);

  // Set Alert
  const setAlert = (msg: string, type: string) => {
    dispatch({
      type: AlertActionTypes.setAlert,
      payload: { msg, type } as Alert
    });
    setTimeout(() => dispatch({ type: AlertActionTypes.removeAlert }), 5000);
  };

  return (
    <alertContext.Provider
      value={{
        alert: state.alert,
        setAlert
      }}
    >
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
