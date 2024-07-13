import './App.css';
import mercatorImage from './images/mercator.jpg';

function App() {

  const countries = ['Cambodia', 'France', 'Germany', 'Vietnam'];


  return (
    <div className="App">
      <header className="App-header">
        <p className="UserName-Travels">
            Sphynx's Travels
        </p>
        <img src={mercatorImage} alt="Map" className="App-mercator" />
      </header>
      <body className="App-body">
      <h2 className="countries-title">Countries</h2> {}
      <ul className="country-list">
        {countries.map((country, index) => (
          <li key={index}>{country}</li>
        ))}
      </ul>
      </body>
    </div>
  );
}

export default App;
