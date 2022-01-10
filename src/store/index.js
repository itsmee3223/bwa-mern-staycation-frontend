import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXETENSIONS__
      ? window.__REDUX_DEVTOOLS_EXETENSIONS__()
      : (f) => f
  )
);

export default store;
