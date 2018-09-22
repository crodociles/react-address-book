import React from "react";
import { Link } from "react-router-dom";

const AddressesListItem = ({ id, street, town, postcode, country }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <span>{street}</span>
      <span>{town}</span>
      <span>{postcode}</span>
      <span>{country}</span>
    </Link>
  </div>
);

export default AddressesListItem;
