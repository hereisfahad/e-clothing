import { createStore, applyMiddleware } from 'redux';
import combienReducers from './root-reducer';
import { logger } from 'redux-logger';


const middlewares = [logger];

const store = createStore(combienReducers,applyMiddleware(...middlewares));

export default store;