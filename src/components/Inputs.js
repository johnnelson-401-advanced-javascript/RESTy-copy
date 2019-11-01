import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ updateMethod, submit }) => {

  return (
    <form>
      <input type='text' name='url'></input>
      <label>
        <input name='method' type="radio" value='get' onClick={() => updateMethod}>Get</input>
        <input name='method' type="radio" value='post' onClick={() => updateMethod}>Post</input>
        <input name='method' type="radio" value='put' onClick={() => updateMethod}>Put</input>
        <input name='method' type="radio" value='patch' onClick={() => updateMethod}>Patch</input>
        <input name='method' type="radio" value='delete' onClick={() => updateMethod}>Delete</input>
      </label>
      <button type="submit" onSubmit={submit}>Go</button>
      <input type='text' name='json'></input>
    </form>
     
  );
};

Input.propTypes = {
  submit: PropTypes.func.isRequired,
  updateMethod: PropTypes.func.isRequired
};

export default Input;

