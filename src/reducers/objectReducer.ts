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
    case MOVE_OBJECT: { //quick and dirty just to test
      console.log('MOVE', action.payload, state[action.payload.levelId]);
      const object = {...state[action.payload.levelId][action.payload.objectId]};
      if (action.payload.direction === 'up') {
        object.y_idx -= 1;
        object.y -= 16;
      }
      if (action.payload.direction === 'down') {
        object.y_idx += 1;
        object.y += 16;
      }
      if (action.payload.direction === 'left') {
        object.x_idx -= 1;
        object.x -= 16;
      }
      if (action.payload.direction === 'right') {
        object.x_idx += 1;
        object.x += 16;
      }
      const level = {...state[action.payload.levelId], [action.payload.objectId]: object };
      state = {...state, [action.payload.levelId]: level};
      break;
    }
  }
  return state;
}
