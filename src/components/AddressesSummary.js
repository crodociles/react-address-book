import React from "react";
import { Link } from "react-router-dom";

const AddressesSummary = () => (
  <div className="page-header">
    <div className="content-container">
      <Link className="button" to="/create">
        Add Address
      </Link>
    </div>
  </div>
);

export default AddressesSummary;
