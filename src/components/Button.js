import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ button, radio, text }) => {
  return (
    <label>
      {button && <button type="submit">{text}</button>}
      {radio && <input type="radio">{text}</input>}
    </label>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  radio: PropTypes.string,
  button: PropTypes.string
};

export default Button;
