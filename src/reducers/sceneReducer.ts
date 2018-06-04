import { CHANGE_SCENE } from '../actions/actiontypes';

const scenes: SceneList = {
  booting: { id: 'booting', background: '#4499ee', messages: [{text: 'Booting', x: 100, y: 100, color: '#000', size: 40}], keyMap: {}, hasTileMap: false },
  loading: { id: 'loading', background: '#22dde3', messages: [{text: 'Loading', x: 100, y: 100, color: '#000', size: 40}], keyMap: {}, hasTileMap: false },
  opening: { id: 'opening', background: '#66a2e5', messages: [{text: 'Miria\'s Gate', x: 100, y: 100, color: '#000', size: 30}], keyMap: {}, hasTileMap: true, },
  play: { id: 'play', background: '#926986', messages: [], keyMap: {x: 'changeLevel2', ArrowDown: 'move', ArrowUp: 'move', ArrowLeft: 'move', ArrowRight: 'move'}, hasTileMap: true, },
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
