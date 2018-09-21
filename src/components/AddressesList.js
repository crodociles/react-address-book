import React from "react";
import AddressesListItem from "./AddressesListItem";
import { connect } from "react-redux";
import { addAddress } from "../actions/addresses";

const AddressesList = props => (
  <div className="content-container">
    <h1>Address List</h1>
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