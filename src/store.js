import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(rootReducer)
// store.subscribe(() => {
//   console.warn('store updated');
// })

export default store;