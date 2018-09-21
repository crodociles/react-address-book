import React from "react";

export default (state = [], action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      return [...state, action.address];
    default:
      return state;
  }
};
