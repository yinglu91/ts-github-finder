/**
 * Action types -- 0, 1, 2 in order
 */
export enum AlertActionTypes {
  setAlert,
  removeAlert
}

/**
 * Data type
 */
export interface Alert {
  msg: string;
  type: string;
}

export interface SetAlertAction {
  type: AlertActionTypes.setAlert;
  payload: Alert;
}

export interface RemoveAlertAction {
  type: AlertActionTypes.removeAlert;
}

export type AlertAction = SetAlertAction | RemoveAlertAction;

/**
 * State type
 */

export interface AlertReducerState {
  alert: Alert | null;
}

// Alert context (store) holds state & functions
export interface AlertContextProps {
  alert: Alert | null;
  setAlert: Function;
}

// setAlert: (msg: string, type: string) => void;
