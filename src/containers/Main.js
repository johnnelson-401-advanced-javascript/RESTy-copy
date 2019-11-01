import React from 'react';

export default class ButtonBar extends Component {
  state = {
    method: "get",
    response: "",
    history: [["method", "url"]]
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
