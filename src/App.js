import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Container } from 'react-bootstrap';
import Content from './components/content/Content';
import Header from './components/header/header';

function App() {
  const [forecast, saveForecast] = useState([]);
  const [countryName, saveCountryName] = useState('New York');
  const [coordenates, saveLocation] = useState({ latitude: '28.9445', longitude: '-82.0336' });
  const [rendering, saveRender] = useState(false);
  async function location(e) {
    e.preventDefault();
    const country = e.target.country.value;
    saveCountryName(country);
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
        saveForecast(value);
        saveRender(true);
      });
  }, [coordenates]);

  if (rendering) {
    return (
      <Container>
        <Header
          location={location}
        />
        <Content
          countryName={countryName}
          forecast={forecast}
        />
      </Container>
    );
  }
  return (
    <Container>
      Loading
    </Container>
  );
}

export default App;
