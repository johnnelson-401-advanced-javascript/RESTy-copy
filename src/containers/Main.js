import React, { Component } from 'react';
import Input from '../components/Inputs';
import callAPI from '../services/Api';

export default class Main extends Component {
  state = {
    url: '',
    method: 'get',
    json: '',
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

    return callAPI(state.url, state.method, state.json)
      .then(res => {
        console.log(res);
      });
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




