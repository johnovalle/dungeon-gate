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
      state = {...state, [action.payload.target]: {...state[action.payload.target], ...action.payload.objects} };
      break;
    }      
  }
  return state;
}
