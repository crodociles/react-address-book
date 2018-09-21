import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";
import addressesReducer from "../reducers/addresses";
import uuid from "uuid";

//Store creation

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      addresses: addressesReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  const addressOne = {
    type: "ADD_ADDRESS",
    address: {
      id: uuid(),
      street: "One Street",
      town: "One Town",
      postcode: "PO57COD",
      country: "Example"
    }
  };
  const addressTwo = {
    type: "ADD_ADDRESS",
    address: {
      id: uuid(),
      street: "Two Street",
      town: "TwoTown",
      postcode: "PO57COD",
      country: "Example"
    }
  };

  store.dispatch(addressOne);
  store.dispatch(addressTwo);

  return store;
};
