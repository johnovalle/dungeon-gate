import { CHANGE_SCENE } from './actiontypes';

export const changeScene = (next: any): Action => { 
  return {
      type: CHANGE_SCENE,
      payload: next
  };
};