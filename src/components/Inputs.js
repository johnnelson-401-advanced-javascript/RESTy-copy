import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ updateMethod, submit, updateURL, updateJSON }) => {

  return (
    <form onSubmit={submit}>
      <input type='text' name='url' onChange={({ target }) => updateURL(target.value)}/>
      <label>
        <input name='method' type="radio" value='get' onClick={() => updateMethod('get')}/>
        <input name='method' type="radio" value='post' onClick={() => updateMethod('post')}/>
        <input name='method' type="radio" value='put' onClick={() => updateMethod('put')}/>
        <input name='method' type="radio" value='patch' onClick={() => updateMethod('patch')}/>
        <input name='method' type="radio" value='delete' onClick={() => updateMethod('delete')}/>
      </label>
      <button type="submit">Go</button>
      <input type='text' name='json' onChange={({ target }) => updateJSON(target.value)}/>
    </form>
     
  );
};

Input.propTypes = {
  submit: PropTypes.func.isRequired,
  updateMethod: PropTypes.func.isRequired,
  updateURL: PropTypes.func.isRequired,
  updateJSON: PropTypes.func.isRequired
};

export default Input;

