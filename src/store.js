import { createStore, applyMiddleware, compose } from "redux";
import initSubscriber from "redux-subscriber";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
const initialState = {};

const middleware = [thunk];

let store;
const reInit = ()=>{
  store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  initSubscriber(store);
}
reInit()
export {store, reInit};
