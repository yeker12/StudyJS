import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

function Movies ( {title, coverImg, rate, year, summary, genres }) {

    return (
        <div>
            <h2>
                <Link to="/movie">{title}</Link>
            </h2>
            <div><img src={coverImg}/></div>
            <p>Movie rating: {rate}</p>
            <p>Year: {year}</p>
            Genres
            <ul> 
                {genres && genres.map( (g) => <li key={g}>{g}</li>)}
            </ul>
            <p>{summary}</p>
         </div>
    );
}

Movies.propTypes = {
    title: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
};

export default Movies;