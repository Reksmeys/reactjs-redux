import {rootReducer} from './../reducers/rootReducer';
import thunk from 'redux-thunk'
import {createStore, compose, applyMiddleware} from 'redux'

const middleware = [thunk]
export const centralStore = createStore(rootReducer, compose(applyMiddleware(...middleware)))