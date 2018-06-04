import store from './Store';
import { moveObject } from './actions/objectActions';

export default class ObjectManager {
  private static _currentScene: Scene;
  private static _tileSize = 16; // put these in config
  private static _cols = 27;
  private static _rows = 27;
  private static _currentLevel: Level;
  private static _currentObjects: ObjectList;
  private static _keyAlias: {[name:string]: string} = {
    ArrowUp: 'up',
    ArrowDown: 'down',
    ArrowLeft: 'left',
    ArrowRight: 'right',
  };

  public static init() {
    let state: any = store.getState();
    ObjectManager._currentScene = state.scenes.current;
    ObjectManager._currentLevel = state.levels.current;
    ObjectManager._currentObjects = state.objects;
    
    
    store.subscribe(() => {
      state = store.getState();
      ObjectManager._currentScene = state.scenes.current;
      ObjectManager._currentLevel = state.levels.current;
      ObjectManager._currentObjects = state.objects;
    });
  }

  public static move(direction: string, objectId: string) {
    const object = {...ObjectManager._currentObjects[ObjectManager._currentLevel.id][objectId]};
    
    direction = ObjectManager._keyAlias[direction] ? ObjectManager._keyAlias[direction] : direction;
    if (direction === 'up') {
      object.y_idx -= 1;
      object.y -= 16;
    }
    if (direction === 'down') {
      object.y_idx += 1;
      object.y += 16;
    }
    if (direction === 'left') {
      object.x_idx -= 1;
      object.x -= 16;
    }
    if (direction === 'right') {
      object.x_idx += 1;
      object.x += 16;
    }
    
    store.dispatch(moveObject(object, ObjectManager._currentLevel.id));
  }
}