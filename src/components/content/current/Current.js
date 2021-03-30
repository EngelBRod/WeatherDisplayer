import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Current({ current, countryName }) {
  // Assigning current day values to variables and converting unix timestamp to readable date format
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date(current.current.dt * 1000);
  const day = `${days[date.getDay()]} ${date.getDate()}`;
  const today = `${months[date.getMonth()]} ${date.getFullYear()}`;
  const { temp } = current.current;
  const { description } = current.current.weather[0];
  return (
    <Row className="py-4">
      <Col>
        <div className="d-flex flex-column flex-md-row  justify-content-center justify-content-md-between py-2">
          <div>
            <h2 className="country">
              { countryName }
            </h2>
            <h3 className="date">
              { `${day}, ${today}` }
            </h3>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <img src={`http://openweathermap.org/img/wn/${current.current.weather[0].icon}@2x.png`} alt="weather" />
            </div>

            <div className="temperature">
              {`${Math.round(temp)} F`}
            </div>
          </div>
        </div>
        <div className="text-center currentDescription">
          {` "Today's weather forecast is ${description}"`}
        </div>
      </Col>
    </Row>
  );
}
export default Current;

Current.defaultProps = {
  countryName: '',
  current: {},
};

Current.propTypes = {
  countryName: PropTypes.string,
  current: PropTypes.shape({
    current: PropTypes.shape({
      clouds: PropTypes.number,
      dt: PropTypes.number,
      temp: PropTypes.number,
      weather: PropTypes.arrayOf(
        PropTypes.shape({
          main: PropTypes.string,
          description: PropTypes.string,
          icon: PropTypes.string,
        }),
      ),
    }),
  }),
};
