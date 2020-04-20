import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './modules/rootReducer';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export default function configureStore(intialState) {
  return createStore(
    rootReducer,
    intialState,
    composeEnhancers(
      applyMiddleware(thunk),
    )
  )
};