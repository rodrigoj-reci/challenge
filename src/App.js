import './App.scss';
import Species from './Species';
import useSpecies from './hooks/useSpecies';
import {getImage, getInchHeight} from './utils/helpers';

function App() {
  const {
    species: {loading, error, data: species},
  } = useSpecies();

  return (
    <div className="App">
      <h1>Empire Strikes Back - Species Listing</h1>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div className="App-species">
        {species.map(
          ({
            name,
            classification,
            designation,
            average_height,
            films,
            language,
          }) => (
            <Species
              key={name}
              name={name}
              classification={classification}
              designation={designation}
              height={getInchHeight(average_height)}
              image={getImage(name)}
              numFilms={films.length}
              language={language}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
