import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import buttons from './reducers/buttons';
import pictures from './reducers/pictures';
import posts from './reducers/posts';

let rootReducer = combineReducers({
 buttons,
 pictures,
 posts
})

let middleware = [thunk, logger]

export default () => createStore(rootReducer, applyMiddleware(...middleware))
