import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect( () => {
    fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
    .then( (response) => response.json())
    .then( (json) => {
      setMovies(json.data.movies);
      setLoading(false);
    })
  }, []);
  console.log(movies);
  return (
    <div>
      <h1>MOVIE APP</h1>
      {loading ? <h3>LOADING...</h3> : (<div>
        {movies.map( (movie) => <div key={movie.id}>
          <strong>{movie.title}</strong>
          <div>
          <img src={movie.medium_cover_image}/>
          </div>
          <p>Movie rating: {movie.rating}</p>
          <p>Year: {movie.year}</p>
          <p>{movie.summary}</p>
         </div>)}
      </div>)}
    </div>
    
  );
}

export default App;
