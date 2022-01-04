import { useEffect, useState } from 'react';
import  Movies from "../Components/Movies";


function Home() {
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
  return (
    <div>
      {loading ? <h3>LOADING...</h3> : <div>{movies.map( (movie) => <Movies 
      key={movie.id}
      title={movie.title}
      coverImg={movie.medium_cover_image}
      rate={movie.rating}
      year={movie.year}
      genres={movie.genres}
      summary={movie.summary}  /> )}</div>}
    </div>
    );
}

export default Home;