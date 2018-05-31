import store from './Store';
import { changeScene } from './actions/sceneActions';
import { changeLevel } from './actions/levelActions';

type BoundAction = () => Action;
export default class KeyListener {
  private _actionMap: {[name: string]: any} = {
    changeScene,
    changeSceneLoading: [changeScene.bind(null, 'loading')],
    changeSceneOpening: [
      changeScene.bind(null, 'opening'),
      changeLevel.bind(null, 'level1'),
    ],
    changeLevel2: [changeLevel.bind(null, 'level2')],
  };
  private _currentScene = store.getState().scenes.current;

  constructor() {
    addEventListener("keydown", (event) => {
      const boundAction = this._currentScene.keyMap[event.key];
      if (boundAction && this._actionMap[boundAction]) {
        this._actionMap[boundAction].forEach((action: BoundAction) => {
          store.dispatch(action());
        })
        // store.dispatch(this._actionMap[boundAction]());
      }
    });

    store.subscribe(() => {
      this._currentScene = store.getState().scenes.current;
      console.log('keylistener', this._currentScene);
    });
  }

};
