import React, { Component } from 'react';
import Input from '../components/Inputs';
import callAPI from '../services/Api';
import CallResponse from '../components/CallResponse';
import HistoryList from '../components/HistoryList';

export default class Main extends Component {
  state = {
    url: '',
    method: 'get',
    json: '',
    callResponse: '',
    history: [{
      method: '',
      url: '',
    }]
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

    return callAPI(this.state.url, this.state.method, this.state.json)
      .then(res => this.setState(() => {
        return {
          callResponse: JSON.stringify(res, null, '\t'),
          history: {
            method: this.state.method,
            url: this.state.url
          }
        };
      }));
  };

  render() {

    return (
      <>
        <div>
          <h1>History</h1>
          <HistoryList history={this.state.history} />
        </div>
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




