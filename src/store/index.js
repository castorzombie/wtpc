import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const initialState = {};

const middleware = applyMiddleware(thunk);

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
/*
const devTools = process.env.NODE_ENV === 'development' ?
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : null */

const store = createStore(
    rootReducer,
    initialState,
    compose(
     middleware, 
     reduxDevTools 
    )
);

export default store;