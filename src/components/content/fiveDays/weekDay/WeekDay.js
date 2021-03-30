import React from 'react';
import PropTypes from 'prop-types';

function WeekDay(
  {
    key, dt, dayTemp, minTemp, maxTemp, icon, forecast, description,
  },
) {
  return (
    <div>
      <div>
        {key}
      </div>
      <div>
        {dt}
      </div>
      <div>
        {dayTemp}
      </div>
      <div>
        {minTemp}
      </div>
      <div>
        {maxTemp}
      </div>
      <div>
        {icon}
      </div>
      <div>
        {forecast}
      </div>
      <div>
        {description}
      </div>
    </div>
  );
}

export default WeekDay;

WeekDay.defaultProps = {
  key: 0,
  dt: 0,
  dayTemp: 0,
  minTemp: 0,
  maxTemp: 0,
  icon: '',
  forecast: '',
  description: '',
};

WeekDay.propTypes = {
  key: PropTypes.number,
  dt: PropTypes.number,
  dayTemp: PropTypes.number,
  minTemp: PropTypes.number,
  maxTemp: PropTypes.number,
  icon: PropTypes.string,
  forecast: PropTypes.string,
  description: PropTypes.string,
};
