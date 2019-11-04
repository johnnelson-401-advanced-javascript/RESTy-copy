import React from 'react';
import PropTypes from 'prop-types';

const CallResponse = ({ data }) => {
  return (
    <div>
      {data}
    </div>
  );
};

CallResponse.propTypes = {
  data: PropTypes.string.isRequired
};

export default CallResponse;
