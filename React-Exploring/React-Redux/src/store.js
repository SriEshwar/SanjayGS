import { createStore } from 'redux';
import customerReducer from './reducers';

const store = createStore(customerReducer);

export default store;
