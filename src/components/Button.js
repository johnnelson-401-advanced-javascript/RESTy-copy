import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ button, radio, text }) => {
  return (
    <label>
      {radio && <input name='method' type="radio" value={text}>{text}</input>}
      {button && <button type="submit">Go</button>}
    </label>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  radio: PropTypes.string,
  button: PropTypes.string
};

export default Button;
