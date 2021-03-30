import React from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import WeekDay from './weekDay/WeekDay';

function FiveDays({ fiveDays }) {
  const weekDay = fiveDays.daily.slice(1, 5).map((item) => (
    <WeekDay
      key={item.dt}
      dt={item.dt}
      dayTemp={item.temp.day}
      minTemp={item.temp.min}
      maxTemp={item.temp.max}
      icon={item.weather[0].icon}
      forecast={item.weather[0].main}
      description={item.weather[0].description}
    />
  ));
  return (
    <Row className="d-flex justify-content-center py-4">
      {weekDay}
    </Row>
  );
}
export default FiveDays;

FiveDays.defaultProps = {
  fiveDays: {},
};

FiveDays.propTypes = {
  fiveDays: PropTypes.shape({
    daily: PropTypes.arrayOf(
      PropTypes.shape({
        clouds: PropTypes.number,
        dt: PropTypes.number,
        temp: PropTypes.shape({
          day: PropTypes.number,
          max: PropTypes.number,
          min: PropTypes.number,
        }),
        weather: PropTypes.arrayOf(
          PropTypes.shape({
            main: PropTypes.string,
            description: PropTypes.string,
            icon: PropTypes.string,
          }),
        ),
      }),
    ),
  }),
};
