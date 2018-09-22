import React, { Component } from "react";
import uuid from "uuid";

class AddressForm extends Component {
  constructor(props) {
    super();
    this.state = {
      street: props.address ? props.address.street : "",
      town: props.address ? props.address.town : "",
      postcode: props.address ? props.address.postcode : "",
      country: props.address ? props.address.country : ""
    };
  }

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
    console.log(this.props, this.state);
    return (
      <form onSubmit={this.onSubmit} className="form">
        <div>
          <input
            className="text-input"
            onChange={this.onStreetChange}
            placeholder="Street"
            type="text"
            value={this.state.street}
          />
        </div>
        <div>
          <input
            className="text-input"
            onChange={this.onTownChange}
            placeholder="Town"
            type="text"
            value={this.state.town}
          />
        </div>
        <div>
          <input
            className="text-input"
            onChange={this.onPostcodeChange}
            placeholder="Postcode"
            type="text"
            value={this.state.postcode}
          />
        </div>
        <div>
          <input
            className="text-input"
            onChange={this.onCountryChange}
            placeholder="Country"
            type="text"
            value={this.state.country}
          />
        </div>
        <button className="button">Save address</button>
      </form>
    );
  }
}

export default AddressForm;
