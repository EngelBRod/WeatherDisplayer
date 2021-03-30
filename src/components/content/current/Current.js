import React from 'react';
import PropTypes from 'prop-types';

function Current({ current }) {
  // Assigning current day values to variables
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date(current.current.dt * 1000);
  const day = days[date.getDay()];
  const today = `${months[date.getMonth()]}/${date.getFullYear()}`;
  return (
    <div>
      {
         // eslint-disable-next-line no-console
      console.log(days[date.getDay()])
      }
      <div>
        Date:
        {day}
      </div>
      <div>
        {today}
      </div>
      <div>
        Temp:
        {current.current.temp}
      </div>
      <div>
        Forecast:
        {current.current.weather[0].main}
      </div>
      <div>
        {current.current.weather[0].description}
      </div>
      <img src={`http://openweathermap.org/img/wn/${current.current.weather[0].icon}@2x.png`} alt="weather" />
    </div>
  );
}
export default Current;

Current.defaultProps = {
  current: {},
};

Current.propTypes = {
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
