import React from "react";

export default (state = [], action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      return [...state, action.address];
    case "EDIT_ADDRESS":
      return state.map(address => {
        if (address.id === action.id) {
          return {
            ...address,
            ...action.updates
          };
        } else {
          return address;
        }
      });
    default:
      return state;
  }
};
