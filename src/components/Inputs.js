import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ updateMethod, submit }) => {

  return (
    <form>
      <input type='text' name='url'/>
      <label>
        <input name='method' type="radio" value='get' onClick={() => updateMethod('get')}/>
        <input name='method' type="radio" value='post' onClick={() => updateMethod('post')}/>
        <input name='method' type="radio" value='put' onClick={() => updateMethod('put')}/>
        <input name='method' type="radio" value='patch' onClick={() => updateMethod('patch')}/>
        <input name='method' type="radio" value='delete' onClick={() => updateMethod('delete')}/>
      </label>
      <button type="submit" onSubmit={submit}>Go</button>
      <input type='text' name='json'/>
    </form>
     
  );
};

Input.propTypes = {
  submit: PropTypes.func.isRequired,
  updateMethod: PropTypes.func.isRequired
};

export default Input;

