import { createStore, compose, applyMiddleware } from 'redux';
import rootreducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(rootreducers,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))




export default store