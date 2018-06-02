import { CHANGE_LEVEL } from '../actions/actiontypes';

import { map0, map1 } from '../maps';

const levels: LevelList = {
  current: null,
  level1: { id: 'level1', tileMap: map0.grid, objects: [], },
  level2: { id: 'level2', tileMap: map1.grid, objects: [], },
  level3: { id: 'level3', tileMap: [], objects: [], },
}

export default (state=levels, action: Action) => {
  switch (action.type) {
    case CHANGE_LEVEL: {
      state = {...state, current: state[action.payload]};
      break;
    }      
  }
  return state;
}
