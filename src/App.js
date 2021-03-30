import React, { useState, useEffect } from 'react';
import './App.scss';
import Content from './components/content/Content';

function App() {
  const [forecast, saveForecast] = useState([]);
  const [coordenates, saveLocation] = useState({ latitude: '28.9445', longitude: '-82.0336' });
  const [rendering, saveRender] = useState(false);
  async function location(e) {
    e.preventDefault();
    const country = e.target.country.value;
    const results = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${country}.json?access_token=${process.env.REACT_APP_MAP_KEY}&limit=1`);
    const response = await results.json();
    saveLocation({
      latitude: response.features[0].center[1],
      longitude: response.features[0].center[0],
    });
  }
  async function forecastRequest() {
    const results = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordenates.latitude}&lon=${coordenates.longitude}&exclude={part}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`);
    const response = await results.json();
    return response;
  }
  useEffect(() => {
    forecastRequest()
      .then((value) => {
        // eslint-disable-next-line no-console
        console.log(value);
        saveForecast(value);
        saveRender(true);
      })
      .catch((value) => {
        // eslint-disable-next-line no-console
        console.log(value);
      });
  }, [coordenates]);

  if (rendering) {
  // eslint-disable-next-line no-console
    const temperature = forecast.daily.map((temp) => console.log(temp));
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={location}>
            <input type="text" name="country" />
            <input type="submit" />
          </form>
          <Content
            forecast={forecast}
          />
          <div>
            {temperature}
          </div>
        </header>
      </div>
    );
  }
  return (
    <div>
      testing
    </div>
  );
}

export default App;
