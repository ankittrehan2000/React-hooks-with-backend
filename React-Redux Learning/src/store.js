import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//since rootReducer is exported from the folder in index.js it does not need to be specified in the path
import rootReducer from './reducers';

const initialstate ={};
//spread operator allows you to open and use compoenents of a iterable
const store = createStore(rootReducer, initialstate, applyMiddleware(thunk))

export default store;