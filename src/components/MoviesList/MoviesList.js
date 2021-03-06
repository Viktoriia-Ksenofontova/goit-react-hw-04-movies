import { Link, withRouter } from 'react-router-dom';
import MoviePreview from '../MoviePreview/MoviePreview';
import styles from './MoviesList.module.css';
import PropTypes from 'prop-types';

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={styles.moviesList}>
      {movies.map(movie => (
        <li key={movie.id} className={styles.moviesListItem}>
          <Link
            className={styles.link}
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location },
            }}
          >
            <MoviePreview
              backdrop_path={movie.backdrop_path}
              title={movie.title}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default withRouter(MoviesList);
