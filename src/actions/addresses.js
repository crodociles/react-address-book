import React from "react";

export const addAddress = address => {
  return {
    type: "ADD_ADDRESS",
    address
  };
};
