import React, { Component } from 'react';
import Input from '../components/Inputs';

export default class Main extends Component {
  state = {
    url: '',
    method: '',
    json: '',
  }

  callAPI = (state) => {
    console.log(state);
  }

  updateMethod = (method) => {
    this.setState({ method: method });
    console.log(this.state.method);
    
  }
  updateJSON = (json) => {
    this.setState(json);
  }
  updateURL = (url) => {
    this.setState(url);
  }

  handleSubmit = () => {
    this.preventDefault();
    this.updateMethod();
    this.updateURL();
    this.updateJSON();
    this.callAPI();
  }

  render() {

    return (
      <>
        <Input
          updateMethod={this.updateMethod}
          submit={this.handleSubmit}

        />
      </>
    );
  }
}



