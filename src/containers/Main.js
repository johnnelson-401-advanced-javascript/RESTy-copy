import React, { Component } from 'react';
import Input from '../components/Inputs';

export default class Main extends Component {
  state = {
    url: '',
    method: 'get',
    json: '',
  }

  callAPI = (state) => {
    console.log(state);
  }

  updateMethod = (method) => {
    this.setState({ method: method });
  }
  updateJSON = (json) => {
    this.setState({ json });
  }
  updateURL = (url) => {
    this.setState({ url });
  }

  submit = (event, state) => {
    event.preventDefault();
    state = this.state;

    this.callAPI(state.url, state.method, state.json);
  }

  render() {

    return (
      <>
        <Input
          updateMethod={this.updateMethod}
          submit={this.submit}
          updateURL={this.updateURL}
          updateJSON={this.updateJSON}
        />
      </>
    );
  }
}




