import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import * as reducers from './reducers';

export default createStore(combineReducers({
    ...reducers
}), applyMiddleware(thunk));