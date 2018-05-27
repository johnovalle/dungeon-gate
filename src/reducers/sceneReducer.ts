import { CHANGE_SCENE } from '../actions/actiontypes';

const scenes: SceneList = {
  booting: { background: '#4499ee', messages: [] },
  loading: { background: '#22dde3', messages: [] },
  opening: { background: '#66a2e5', messages: [] },
  play: { background: '#926986', messages: [] },
  gameover: { background: '#1212ae', messages: [] },
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
