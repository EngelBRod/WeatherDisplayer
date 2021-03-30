import React from 'react';
import { Col, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function WeekDay(
  {
    dt, dayTemp, minTemp, maxTemp, icon, forecast,
  },
) {
  // Converting unix timestamp to readable date format
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(dt * 1000);
  const day = `${days[date.getDay()]} ${date.getDate()}`;
  return (
    <Col xs={10} md={3} className=" py-2">
      <Card className="MainColor d-flex justify-content-center">
        <Card.Title className="text-center py-2 dayTitle">
          {day}
        </Card.Title>
        <div className="d-flex justify-content-between px-2">
          <div className="text-center">
            <h4>Min</h4>
            {`${Math.round(minTemp)} F`}
          </div>
          <div className="text-center">
            <h4>Max</h4>
            {`${Math.round(maxTemp)} F`}
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center px-2">
          <div className="text-center dayTemp">
            {`${Math.round(dayTemp)} F`}
          </div>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather" className="weatherIcon" />
        </div>
        <div className="text-center py-2 dayForecast">
          {forecast}
        </div>
      </Card>
    </Col>
  );
}

export default WeekDay;

WeekDay.defaultProps = {
  dt: 0,
  dayTemp: 0,
  minTemp: 0,
  maxTemp: 0,
  icon: '',
  forecast: '',
};

WeekDay.propTypes = {
  dt: PropTypes.number,
  dayTemp: PropTypes.number,
  minTemp: PropTypes.number,
  maxTemp: PropTypes.number,
  icon: PropTypes.string,
  forecast: PropTypes.string,
};
