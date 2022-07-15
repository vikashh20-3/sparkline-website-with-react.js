import { configureStore } from '@reduxjs/toolkit'
import changeTheNumber from './reducers/Updown';
// import rootReducer from './reducers/Index';
// import changeTheNumber from './reducers/Updown';

// const store =configureStore(rootReducer);
const store =configureStore(changeTheNumber);

export default store;