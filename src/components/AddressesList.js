import React from "react";
import { connect } from "react-redux";
import { addAddress } from "../actions/addresses";
import AddressesListItem from "./AddressesListItem";

const AddressesList = props => (
  <div className="content-container">
    <div className="list-header">
      <h1>Address List</h1>
    </div>
    {props.addresses.length === 0 ? (
      <div className="list-item list-item--message">
        <span>No addresses</span>
      </div>
    ) : (
      props.addresses.map(address => (
        <AddressesListItem key={address.id} {...address} />
      ))
    )}
  </div>
);
const mapStateToProps = state => ({
  addresses: state.addresses
});
const mapDispatchToProps = dispatch => ({
  addAddress: address => dispatch(addAddress(address))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressesList);
