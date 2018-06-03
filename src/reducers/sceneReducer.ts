import { CHANGE_SCENE } from '../actions/actiontypes';

const scenes: SceneList = {
  booting: { id: 'booting', background: '#4499ee', messages: [], keyMap: {}, hasTileMap: false },
  loading: { id: 'loading', background: '#22dde3', messages: [], keyMap: {}, hasTileMap: false },
  opening: { id: 'opening', background: '#66a2e5', messages: [], keyMap: {}, hasTileMap: true, },
  play: { id: 'play', background: '#926986', messages: [], keyMap: {x: 'changeLevel2', ArrowDown: 'moveDown', ArrowUp: 'moveUp', ArrowLeft: 'moveLeft', ArrowRight: 'moveRight'}, hasTileMap: true, },
  gameover: { id: 'gameover', background: '#1212ae', messages: [], keyMap: {}, hasTileMap: false, },
}
scenes.current = scenes.booting;

export default (state=scenes, action: Action) => {
  switch (action.type) {
    case CHANGE_SCENE: {
      state = {...state, current: state[action.payload]};
      break;
    }      
  }
  return state;
}
