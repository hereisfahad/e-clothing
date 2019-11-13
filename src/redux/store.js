import { createStore, applyMiddleware } from "redux";
import combienReducers from "./root-reducer";
import { logger } from "redux-logger";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(combienReducers, applyMiddleware(...middlewares));

export default store;
