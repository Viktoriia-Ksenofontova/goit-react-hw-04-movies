import styles from './MovieCard.module.css';

const MovieCard = ({ poster_path, title, genres, overview, vote_average }) => (
  <div className={styles.movieCard}>
    {poster_path ? (
      <img
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt="poster"
      />
    ) : null}
    <div className={styles.movieDescription}>
      <h2 className={styles.movieCardTitle}>{title}</h2>
      <p>
        User score: <span>{vote_average}</span>{' '}
      </p>
      <p>
        Overview: <span>{overview}</span>
      </p>
      <p>Genres:</p>
      <ul>
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default MovieCard;
