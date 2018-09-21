import React, { Component } from "react";
import uuid from "uuid";

class AddressForm extends Component {
  state = {
    id: this.props.address ? this.props.address.id : uuid(),
    street: this.props.address ? this.props.address.street : "",
    town: this.props.address ? this.props.address.town : "",
    postcode: this.props.address ? this.props.address.postcode : "",
    country: this.props.address ? this.props.address.country : ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  onStreetChange = e => {
    this.setState({
      street: e.target.value
    });
  };
  onTownChange = e => {
    this.setState({
      town: e.target.value
    });
  };
  onPostcodeChange = e => {
    this.setState({
      postcode: e.target.value
    });
  };
  onCountryChange = e => {
    this.setState({
      country: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        <div>
          <input
            className="text-input"
            onChange={this.onStreetChange}
            placeholder="Street"
            type="text"
          />
        </div>
        <div>
          <input
            className="text-input"
            onChange={this.onTownChange}
            placeholder="Town"
            type="text"
          />
        </div>
        <div>
          <input
            className="text-input"
            onChange={this.onPostcodeChange}
            placeholder="Postcode"
            type="text"
          />
        </div>
        <div>
          <input
            className="text-input"
            onChange={this.onCountryChange}
            placeholder="Country"
            type="text"
          />
        </div>
        <button className="button">Add address</button>
      </form>
    );
  }
}

export default AddressForm;
