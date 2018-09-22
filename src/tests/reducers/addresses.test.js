import addressesReducer from "../../reducers/addresses";
import addresses from "../fixtures/addresses";

test("Should set default state", () => {
  const state = addressesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

// test("Should add address", () => {
//   const address = {
//     id: "dddi3",
//     street: "Stteet",
//     town: "promor",
//     postcode: "DEF",
//     country: "doeinf"
//   };
//   const action = { type: "ADD_ADDRESS", address };
//   const state = addressesReducer(addresses, action);
//   expect(state).toEqual([...addresses, address]);
// });
