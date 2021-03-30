import React from 'react';
import PropTypes from 'prop-types';
import Current from './current/Current';
import FiveDays from './fiveDays/FiveDays';

function Content({ forecast }) {
  return (
    <div>
      <Current
        current={forecast}
      />
      <FiveDays
        fiveDays={forecast}
      />
    </div>
  );
}
export default Content;

Content.defaultProps = {
  forecast: {},
};

Content.propTypes = {
  forecast: PropTypes.shape({}),
};
