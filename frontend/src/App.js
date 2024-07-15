import './App.css';
import mercatorImage from './images/mercator.jpg';
import React, {useState} from 'react';


function App() {

  const countries = ['Austria', 'Cambodia', 'France', 'Germany', 'Tanzania', 'Vietnam'];
  const cities = ['Beijing', 'London', 'Paris', 'Tokyo'];
  const territories = ['Puerto Rico', 'Hong Kong', 'Macau', 'Zanzibar'];
  const landmarks = ['Angkor Wat', 'Eiffel Tower', 'Great Wall of China', 'Colosseum'];
  const places = {countries, cities, territories, landmarks};

  const [currentList, setList] = useState('countries');
  const listChange = (listName) => {
    setList(listName);
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

      <img src={mercatorImage} alt="Map" className="mercator-pic" />

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
