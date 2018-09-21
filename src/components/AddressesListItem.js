import React from "react";

const AddressesListItem = props => (
  <div>
    <span>{props.street}</span>
    <span>{props.town}</span>
    <span>{props.postcode}</span>
    <span>{props.country}</span>
  </div>
);

export default AddressesListItem;
