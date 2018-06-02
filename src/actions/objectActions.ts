import { ADD_OBJECTS, ADD_OBJECT_LEVEL, MOVE_OBJECT } from '../actions/actiontypes';

export const addObjects = (target: string, objects: any[]): Action => { 
  return {
      type: ADD_OBJECTS,
      payload: {target, objects}
  };
};

export const addObjectLevel = (levelId: string): Action => { 
  return {
      type: ADD_OBJECT_LEVEL,
      payload: levelId
  };
};

export const moveObject = (objectId: string, direction: string): Action => { 
  return {
      type: MOVE_OBJECT,
      payload: {objectId, direction}
  };
};