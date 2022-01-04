import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const {id} = useParams();
    useEffect( () => {
        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then( (response) => response.json())
        .then( (json) => {
            setMovies(json.data.movie);
            setLoading(false);  
        }
    )}, [])
    console.log(movies)
    return(
        <div>
            {loading? <h2>Loading...</h2> : 
            <div>
                <h2>{movies.title}</h2>
                <div><img src={movies.large_cover_image}/></div>
                <ol>
                <li>genres</li>
                <ul>
                    {movies.genres && movies.genres.map( (g) => <li key={g}>{g}</li>)}
                </ul>
                <li>year : {movies.year}</li>
                <li>rating : {movies.rating}</li>
                <li>runtime : {movies.runtime} min</li>
                <li>download Count : {movies.download_count}</li>
                <li>description : {movies.description_full}</li>
                </ol>
            </div>}
        </div>
    );
}

export default Detail;