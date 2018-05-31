import { CHANGE_LEVEL } from './actiontypes';

export const changeLevel = (next: any): Action => { 
  return {
      type: CHANGE_LEVEL,
      payload: next
  };
};