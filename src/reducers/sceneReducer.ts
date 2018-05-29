import { CHANGE_SCENE } from '../actions/actiontypes';

const scenes: SceneList = {
  booting: { background: '#4499ee', messages: [], keyMap: {Enter: 'changeSceneLoading'} },
  loading: { background: '#22dde3', messages: [], keyMap: {a: 'changeSceneOpening'} },
  opening: { background: '#66a2e5', messages: [], keyMap: {} },
  play: { background: '#926986', messages: [], keyMap: {} },
  gameover: { background: '#1212ae', messages: [], keyMap: {} },
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
