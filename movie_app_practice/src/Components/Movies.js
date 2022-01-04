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

export default Movies;