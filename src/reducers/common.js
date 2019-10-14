import {
  SETTINGS_SAVED,
  
} from '../constants/actionTypes';

const defaultState = {
  appName: 'TEST PROJECT',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SETTINGS_SAVED:
      return {
        ...state,
        currentUser: action.error ? null : action.payload
      };
    default:
      return state;
  }
};
