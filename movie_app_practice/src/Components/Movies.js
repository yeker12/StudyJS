import PropTypes from 'prop-types';

function Movies ( {title, coverImg, rate, year, summary }) {

    return (
        <div>
            <strong>{title}</strong>
            <div><img src={coverImg}/></div>
            <p>Movie rating: {rate}</p>
            <p>Year: {year}</p>
            <p>{summary}</p>
         </div>
    );
}

Movies.PropTypes = {
    title: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
};

export default Movies;