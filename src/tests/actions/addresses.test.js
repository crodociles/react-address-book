import {
  addAddress,
  editAddress,
  removeAddress
} from "../../actions/addresses";
import { addresses } from "../fixtures/addresses";

test("should set up add address action object", () => {
  const action = addAddress(addresses[2]);
  expect(action).toEqual({
    type: "ADD_ADDRESS",
    address: addresses[2]
  });
});

test("Should set up edit expense action object", () => {
  const id = "odofnfo3odm-orn";
  const action = editAddress(id, { town: "Corft" });
  expect(action).toEqual({
    type: "EDIT_ADDRESS",
    id,
    updates: {
      town: "Corft"
    }
  });
});

test("Should set up remove expense action object", () => {
  const id = "peof333-doeinfp";
  const action = removeAddress({ id });
  expect(action).toEqual({
    type: "REMOVE_ADDRESS",
    id
  });
});
