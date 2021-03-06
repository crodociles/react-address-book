import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";
import addressesReducer from "../reducers/addresses";

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
      id: "3dd48f44-225d-414b-959b-54fa53edadb6",
      street: "Grosvenor Lane",
      town: "Skegaville",
      postcode: "OP34 EDC",
      country: "United Kingdom"
    }
  };
  const addressTwo = {
    type: "ADD_ADDRESS",
    address: {
      id: "0a6bbfcc-8f97-4f4a-9205-d91d240b70bf",
      street: "Lansdowne Avenue",
      town: "Burghly Marsh",
      postcode: "DE39 DER",
      country: "United Kingdom"
    }
  };

  store.dispatch(addressOne);
  store.dispatch(addressTwo);

  return store;
};
