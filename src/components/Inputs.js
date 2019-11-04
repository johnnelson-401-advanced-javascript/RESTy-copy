import React from 'react';
import PropTypes from 'prop-types';
import style from './Inputs.css';

const Input = ({ updateMethod, submit, updateURL, updateJSON }) => {

  return (
    <form onSubmit={submit} className={style.Inputs}>
      <input type='text' name='url' onChange={({ target }) => updateURL(target.value)}/>
      <label>
        <input name='method' type="radio" value='get' id='get' onClick={() => updateMethod('get')}/>
        <label htmlFor='get'>Get</label>
        <input name='method' type="radio" value='post' id='post' onClick={() => updateMethod('post')}/>
        <label htmlFor='post'>Post</label>
        <input name='method' type="radio" value='put' id='put' onClick={() => updateMethod('put')}/>
        <label htmlFor='put'>Put</label>
        <input name='method' type="radio" value='patch' id='patch' onClick={() => updateMethod('patch')}/>
        <label htmlFor='patch'>Patch</label>
        <input name='method' type="radio" value='delete' id='delete' onClick={() => updateMethod('delete')}/>
        <label htmlFor='delete'>Delete</label>
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

