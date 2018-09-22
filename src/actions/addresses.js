export const addAddress = address => {
  return {
    type: "ADD_ADDRESS",
    address
  };
};

export const editAddress = (id, updates) => {
  return {
    type: "EDIT_ADDRESS",
    id,
    updates
  };
};

export const removeAddress = ({ id } = {}) => {
  return { type: "REMOVE_ADDRESS", id };
};
