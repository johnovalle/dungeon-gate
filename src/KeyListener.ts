import store from './Store';
import { changeScene } from './actions/sceneActions';
import { changeLevel } from './actions/levelActions';
import { addObjects, addObjectLevel, moveObject} from './actions/objectActions';

type BoundAction = () => Action;
export default class KeyListener {
  private _currentScene = store.getState().scenes.current;
  private _currentLevel: Level = {} as Level;
  private _actionMap: {[name: string]: any} = {
    changeScene,
    changeSceneLoading: [changeScene.bind(null, 'loading')],
    changeSceneOpening: [
      changeScene.bind(null, 'opening'),
      changeLevel.bind(null, 'level1'),
      addObjectLevel.bind(null, 'level1'),
      addObjects.bind(null, 'level1', {player: {id: 'player', x:0, y:0, x_idx: 0, y_idx: 0, vel_x: 0, vel_y: 0, color:'#000'}}),
    ],
    changeLevel2: [changeLevel.bind(null, 'level2')],
    moveUp: () => [moveObject.bind(null, this._currentLevel.id, 'player', 'up')],
    moveDown: () => [moveObject.bind(null, this._currentLevel.id, 'player', 'down')],
    moveLeft: () => [moveObject.bind(null, this._currentLevel.id,'player', 'left')],
    moveRight: () => [moveObject.bind(null, this._currentLevel.id, 'player','right')],
  };
  
  

  constructor() {
    addEventListener("keydown", (event) => {
      const boundAction = this._currentScene.keyMap[event.key];
      console.log(event.key, boundAction);
      if (boundAction && this._actionMap[boundAction]) {
        let actions = this._actionMap[boundAction];
        if(typeof actions === 'function') {
          actions = actions();
        }

        actions.forEach((action: BoundAction) => {
          store.dispatch(action());
        });
        
        // store.dispatch(this._actionMap[boundAction]());
      }
    });

    store.subscribe(() => {
      const state: any = store.getState();
      this._currentScene = state.scenes.current;
      this._currentLevel = state.levels.current;
      // console.log('keylistener', this._currentScene);
    });
  }

};
