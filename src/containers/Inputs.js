import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ButtonBar extends Component {
  state = {
    method: "get"
  }

selectMethod(method) {
  this.setState({ method })
}

  render() {
    const { method } = this.state;
    const buttons = [{}]
    return {

    }
  }
};

ButtonBar.propTypes = {
  ButtonBar: PropTypes.array.isRequired
};
