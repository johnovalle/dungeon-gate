import { ADD_OBJECTS, ADD_OBJECT_LEVEL, MOVE_OBJECT } from '../actions/actiontypes';

import { map0, map1 } from '../maps';

const levels: ObjectGroup = { // this might end up being an object list reducer, handling objects themselves with one more level

}

export default (state=levels, action: Action) => {
  switch (action.type) {
    case ADD_OBJECT_LEVEL: {
      state = {...state, [action.payload]: {} };
      break;
    }
    case ADD_OBJECTS: {
      const objects: {[name: string]: any} = {};
      action.payload.objects.forEach((object: any) => {
        objects[object.id] = object;
      });
      state = {...state, [action.payload.target]: {...state[action.payload.target], ...objects} };
      break;
    }
    case MOVE_OBJECT: {
      const level = {...state[action.payload.levelId], [action.payload.targetObject.id]: action.payload.targetObject };
      state = {...state, [action.payload.levelId]: level};
      break;
    }
  }
  return state;
}
