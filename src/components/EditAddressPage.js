import React from "react";
import AddressForm from "./AddressForm";
import { connect } from "react-redux";
import { editAddress, removeAddress } from "../actions/addresses";

class EditAddressPage extends React.Component {
  onSubmit = address => {
    this.props.editAddress(this.props.address.id, address);
    this.props.history.push("/");
  };
  onRemove = () => {
    this.props.removeAddress({ id: this.props.address.id });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="content-container">
        <h1>Edit Address</h1>
        <AddressForm address={this.props.address} onSubmit={this.onSubmit} />
        <button className="button button--warning" onClick={this.onRemove}>
          Remove Address
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editAddress: (id, address) => dispatch(editAddress(id, address)),
  removeAddress: id => dispatch(removeAddress(id))
});

const mapStateToProps = (state, props) => ({
  address: state.addresses.find(address => address.id === props.match.params.id)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAddressPage);
