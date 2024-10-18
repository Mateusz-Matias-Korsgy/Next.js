<<<<<<< HEAD
import React, { Component } from 'react';
import OtpInput from 'react-otp-input';

export default class App extends Component {
  state = { otp: '' };
=======
import React, { Component } from "react";
import OtpInput from "react-otp-input";

export default class App extends Component {
  state = { otp: "" };
>>>>>>> a456185 (Final Day update 1)

  handleChange = (otp) => this.setState({ otp });

  render() {
    return (
      <OtpInput
        value={this.state.otp}
        onChange={this.handleChange}
        numInputs={6}
        separator={<span>-</span>}
      />
    );
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> a456185 (Final Day update 1)
