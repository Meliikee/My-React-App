import React, { Component } from "react";

export default class FormDemo1 extends Component {
  state = { userName: "", city: "" };

  onChangeHandler = (event) => {
    //this.setState({ userName: event.target.value });
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted! User Name: " + this.state.userName + " City: " + this.state.city);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>User Name</h5>
          <input name="userName" onChange={this.onChangeHandler} type="text" />
          <h4>User Name is {this.state.userName}</h4>

          <h5>City</h5>
          <input name="city" onChange={this.onChangeHandler} type="text" />
          <h4>City is {this.state.city}</h4>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
