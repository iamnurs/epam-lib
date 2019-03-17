import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {User} from './user';
import {Books} from "./books"

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            user: User,
            books: Books
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}