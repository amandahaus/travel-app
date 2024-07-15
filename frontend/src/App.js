import './App.css';
import mercatorImage from './images/mercator.jpg';


function App() {

  const countries = ['Cambodia', 'France', 'Germany', 'Vietnam'];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <p className="user-travels">
            Sphynx's Travels
        </p>
      </header>
      <body className="dashboard-body">
      <img src={mercatorImage} alt="Map" className="mercator-pic" />
      <h2 className="countries-title"> Countries </h2>
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
