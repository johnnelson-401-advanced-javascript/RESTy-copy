import React, { Component } from 'react';
import Input from '../components/Inputs';
import callAPI from '../services/Api';
import CallResponse from '../components/CallResponse';

export default class Main extends Component {
  state = {
    url: '',
    method: 'get',
    json: '',
    callResponse: '{}',
    history: []
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

  submit = (event) => {
    event.preventDefault();

    // state = this.state;
    return callAPI(this.state.url, this.state.method, this.state.json)
      .then(res => this.setState(() => {
        return {
          callResponse: JSON.stringify(res, null, '\t'),
          // history: state.history.concat({
          //   method: this.state.method,
          //   url: this.state.url
          // })
        };
      }));
  };

  render() {

    return (
      <>
        <Input
          updateMethod={this.updateMethod}
          submit={this.submit}
          updateURL={this.updateURL}
          updateJSON={this.updateJSON}
        />
        <CallResponse data={this.state.callResponse}/>
      </>
    );
  }
}




