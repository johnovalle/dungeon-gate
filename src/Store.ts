import { createStore, combineReducers, applyMiddleware } from 'redux';
import scenes from './reducers/sceneReducer';
import levels from './reducers/levelReducer';

var window: any = window || {}; // TODO set up test runner to provide DOM variables

export default createStore(combineReducers({scenes, levels}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

