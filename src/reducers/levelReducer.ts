import { CHANGE_LEVEL } from '../actions/actiontypes';

import { map0, map1 } from '../maps';

const levels: LevelList = {
  current: null,
  level1: { tileMap: map0.grid, objects: [], },
  level2: { tileMap: map1.grid, objects: [], },
  level3: { tileMap: [], objects: [], },
}
levels.current = levels.booting;

export default (state=levels, action: Action) => {
  switch (action.type) {
    case CHANGE_LEVEL: {
      state = {...state, current: state[action.payload]};
      break;
    }      
  }
  return state;
}
