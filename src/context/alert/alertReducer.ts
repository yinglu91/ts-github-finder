import { AlertActionTypes, AlertAction, AlertReducerState } from './types';

export default (state: AlertReducerState, action: AlertAction) => {
  switch (action.type) {
    case AlertActionTypes.setAlert:
      return { alert: action.payload };
    case AlertActionTypes.removeAlert:
      return { alert: null };
    default:
      return state;
  }
};
