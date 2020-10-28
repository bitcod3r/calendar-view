import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import reducer from "./reducer";


const logger = store => next => action => {
  console.log("action:", action);
  return next(action);
};

export const setupStore = ({ httpApi }) => {

  const middlewares = [];

  middlewares.push(
    reduxThunk.withExtraArgument({
      httpApi: httpApi,
    }),
  );

  if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
  }

  return createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(...middlewares),
    ),
  );
};
