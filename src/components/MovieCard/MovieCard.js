import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';
import defaultImage from '../../no-poster.png';

const MovieCard = ({ poster_path, title, genres, overview, vote_average }) => (
  <div className={styles.movieCard}>
    {poster_path ? (
      <img
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt="poster"
      />
    ) : (
      <img src={defaultImage} alt="poster" width="300" />
    )}
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

MovieCard.defaultProps = {
  vote_average: 0,
};

MovieCard.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape).isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number,
};

export default MovieCard;
