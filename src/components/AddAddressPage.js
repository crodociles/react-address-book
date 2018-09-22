import React, { Component } from "react";
import AddressForm from "./AddressForm";
import { connect } from "react-redux";
import { addAddress } from "../actions/addresses";
import uuid from "uuid";

class AddAddressPage extends Component {
  state = {};
  onSubmit = address => {
    address.id = uuid();
    console.log(address);
    this.props.addAddress(address);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="content-container">
        <div>
          <h1>Add address</h1>
        </div>
        <AddressForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addAddress: address => dispatch(addAddress(address))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddAddressPage);
