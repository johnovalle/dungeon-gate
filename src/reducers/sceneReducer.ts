import { CHANGE_SCENE } from '../actions/actiontypes';

const scenes: SceneList = {
  booting: { background: '#4499ee', messages: [], keyMap: {Enter: 'changeSceneLoading'}, hasTileMap: false },
  loading: { background: '#22dde3', messages: [], keyMap: {a: 'changeSceneOpening'}, hasTileMap: false },
  opening: { background: '#66a2e5', messages: [], keyMap: {x: 'changeLevel2', ArrowDown: 'moveDown', ArrowUp: 'moveUp', ArrowLeft: 'moveLeft', ArrowRight: 'moveRight'}, hasTileMap: true, },
  play: { background: '#926986', messages: [], keyMap: {}, hasTileMap: true, },
  gameover: { background: '#1212ae', messages: [], keyMap: {}, hasTileMap: false, },
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
