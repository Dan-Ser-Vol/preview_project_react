import {configureStore} from "@reduxjs/toolkit"
import countReducer from "./slices/count.slice";

const saveStateMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  return result;
};

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {};


const store = configureStore({
  reducer: {
    count:countReducer
  },
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(saveStateMiddleware),
});


export default store