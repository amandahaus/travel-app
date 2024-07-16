import './App.css';
import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import {useState} from 'react';

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"

function App() {

  const countries = ['Austria', 'Cambodia', 'Canada', 'Costa Rica', 'France', 'Germany', 'Mexico', 'Netherlands', 'Tanzania', 'United Kingdom', 'United States of America', 'Vietnam'];
  const cities = ['Beijing', 'London', 'Paris', 'Tokyo'];
  const territories = ['Puerto Rico', 'Hong Kong', 'Macau', 'Zanzibar'];
  const landmarks = ['Angkor Wat', 'Eiffel Tower', 'Great Wall of China', 'Colosseum'];
  const places = {countries, cities, territories, landmarks};

  const [currentList, setList] = useState('countries');
  const [highlightedCountries, setHighlightedCountries] = useState([]);

  const listChange = (listName) => {
    setList(listName);
    if (listName === 'countries') {
      setHighlightedCountries(places.countries);
    }
    else {
      setHighlightedCountries([]);
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">

        <p className="user-travels">
            Sphynx's Travels
        </p>
        <button className="add-travels-button">+</button>

      </header>

      <body className="dashboard-body">

      <div className="map-container">
      <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={highlightedCountries.includes(geo.properties.name) ? '#405b9b':"#eaedf0"}
                  stroke="#FFFFFF"
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>

      <div className="buttons-container">
          <button className="list-button" onClick={() => listChange('countries')}>Countries</button>
          <button className="list-button" onClick={() => listChange('cities')}>Cities</button>
          <button className="list-button" onClick={() => listChange('territories')}>Territories</button>
          <button className="list-button" onClick={() => listChange('landmarks')}>Landmarks</button>
        </div>
      
      <ul className="countries-list">
        {places[currentList].map((item, index) => (
            <li key={index}>
              <button className="countries-button">{item}</button>
            </li>
        ))}
      </ul>

      </body>
    </div>
  );
}

export default App;
