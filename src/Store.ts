import { createStore, combineReducers } from 'redux';
import scenes from './reducers/sceneReducer';

var window: any = window || {}; // TODO set up test runner to provide DOM variables

export default createStore(combineReducers({scenes}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

