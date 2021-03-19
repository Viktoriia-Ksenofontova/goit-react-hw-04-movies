const MoviePreview = ({ backdrop_path, title }) => (
  <div>
    {backdrop_path ? (
      <img
        src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`}
        alt={title}
      />
    ) : null}
    <h3>{title}</h3>
  </div>
);

export default MoviePreview;
