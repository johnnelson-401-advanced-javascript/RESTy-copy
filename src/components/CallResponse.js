import React from 'react';
import PropTypes from 'prop-types';

const CallResponse = ({ data }) => {
  return (
    <pre>
      {data}
    </pre>
  );
};

CallResponse.propTypes = {
  data: PropTypes.string.isRequired
};

export default CallResponse;
