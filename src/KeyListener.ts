import store from './Store';
import { changeScene } from './actions/sceneActions';

export default class KeyListener {
  private _actionMap: {[name:string]: any} = {
    changeScene,
    changeSceneLoading: changeScene.bind(null, 'loading'),
    changeSceneOpening: changeScene.bind(null, 'opening'),
  };
  private _currentScene = store.getState().scenes.current;

  constructor() {
    addEventListener("keydown", (event) => {
      const boundAction = this._currentScene.keyMap[event.key];
      if (boundAction) {
        store.dispatch(this._actionMap[boundAction]());
      }
    });

    store.subscribe(() => {
      this._currentScene = store.getState().scenes.current;
      console.log('keylistener', this._currentScene);
    });
  }

};
