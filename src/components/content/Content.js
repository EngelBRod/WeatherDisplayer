import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Current from './current/Current';
import FiveDays from './fiveDays/FiveDays';

function Content({ forecast, countryName }) {
  return (
    <Row>
      <Col>
        <Current
          countryName={countryName}
          current={forecast}
        />
        <FiveDays
          fiveDays={forecast}
        />
      </Col>
    </Row>
  );
}
export default Content;

Content.defaultProps = {
  countryName: '',
  forecast: {},
};

Content.propTypes = {
  countryName: PropTypes.string,
  forecast: PropTypes.shape({}),
};
