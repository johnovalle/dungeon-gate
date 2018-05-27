import { createStore, combineReducers } from 'redux';
import scenes from './reducers/sceneReducer';


export default createStore(combineReducers({scenes}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

