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
        <button className="add-travels-button">+</button>

      </header>

      <body className="dashboard-body">

      <img src={mercatorImage} alt="Map" className="mercator-pic" />
      
      <div className="countries-title-container">
        <h2 className="countries-title"> Countries </h2>
      </div>
      <ul className="countries-list">
        {countries.map((country, index) => (
          <li key={index}>
            <button className="countries-button">{country}</button>
          </li>
        ))}
      </ul>

      </body>
    </div>
  );
}

export default App;
