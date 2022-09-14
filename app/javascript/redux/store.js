import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from './logger/thunk';
import logger from './logger/logger';
import greetingsReducer from './greeting_reducer';

const rootReducer = combineReducers({
    greetingsReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunk),
  );
  
  export default store;