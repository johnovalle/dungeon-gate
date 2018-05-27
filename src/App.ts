import Message from './Message';
import Stage from './Stage';
import Renderer from './Renderer';
import store from './Store';

import { CHANGE_SCENE } from './actions/actiontypes';
import { changeScene } from './actions/sceneActions';

const message = new Message();
message.show();

const stage = new Stage();
stage.attach(document.body);

const renderer = new Renderer(stage.ctx, stage.canvas);
// renderer.draw();
// renderer.drawText('Alive', '#00ff00', 100, 300);

store.dispatch(changeScene('booting'));
store.subscribe(() => {
  console.log('store changed', store.getState());
});

setTimeout(()=> {
  store.dispatch(changeScene('loading'));
}, 2000);

setTimeout(()=> {
  store.dispatch(changeScene('opening'));
}, 4000);

