import { createContext } from 'react';
import { AlertContextProps, Alert } from './types';

const ininitial = {
  alert: {} as Alert,
  setAlert: () => null
};
const alertContext = createContext<AlertContextProps>(ininitial);

export default alertContext;

// setAlert: (msg: string, type: string) => void;
