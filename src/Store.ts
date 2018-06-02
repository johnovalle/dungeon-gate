import { createStore, combineReducers, applyMiddleware } from 'redux';
import scenes from './reducers/sceneReducer';
import levels from './reducers/levelReducer';
import objects from './reducers/objectReducer';

var window: any = window || {}; // TODO set up test runner to provide DOM variables

export default createStore(combineReducers({scenes, levels, objects}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

