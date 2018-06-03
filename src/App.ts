import Message from './Message';
import Stage from './Stage';
import Renderer from './Renderer';
import store from './Store';
import KeyListener from './KeyListener';

import { changeScene } from './actions/sceneActions';
import { changeLevel } from './actions/levelActions';
import { addObjects, addObjectLevel, moveObject} from './actions/objectActions';

const message = new Message();
message.show();

const stage = new Stage();
stage.attach(document.body);

const keyListener = new KeyListener();

const renderer = new Renderer(stage.ctx, stage.canvas);

store.subscribe(() => {
  const state = store.getState();
  const currentScene = state.scenes.current;
  if (currentScene.id === 'booting') {
    // booting operations
    setTimeout(()=> {
      store.dispatch(changeScene('loading'));
    }, 100);
  }
  if (currentScene.id === 'loading') {
    // loading operations
    setTimeout(()=> {
      store.dispatch(changeScene('opening'));
    }, 100);
  }

  if (currentScene.id === 'opening') {
    // opening operations
    
    setTimeout(()=> { // replace with splash screen and enter / to play / load game
      store.dispatch(changeScene('play'));
      store.dispatch(changeLevel('level1'));
      store.dispatch(addObjectLevel('level1'));
      store.dispatch(addObjects('level1', [
        {id: 'player', x:0, y:0, x_idx: 0, y_idx: 0, vel_x: 0, vel_y: 0, color:'#000'},
        {id: 'monster', x:16, y:16, x_idx: 1, y_idx: 1, vel_x: 0, vel_y: 0, color:'#ff0000'},    
      ]));
    }, 100);
  }

  if (currentScene.id === 'play') {
    // play operations
    // operations here will fire continuously 
  }
});

store.dispatch(changeScene('booting'));
