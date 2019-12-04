import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';


const HistoryList = ({ history }) => {
  const elements = history.map((item, i) => {
    return <HistoryItem key={i} {...item} />;
  });
  return (
    <pre>
      {elements}
    </pre>
  );
};
HistoryList.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default HistoryList;
