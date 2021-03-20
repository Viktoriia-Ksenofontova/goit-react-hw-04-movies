import PropTypes from 'prop-types';
import defaultImage from '../../no-poster.png';
import styles from './MoviePreview.module.css';

const MoviePreview = ({ backdrop_path, title }) => (
  <div>
    {backdrop_path ? (
      <img
        src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`}
        alt={title}
      />
    ) : (
      <img className={styles.defaultImage} src={defaultImage} alt="no image" />
    )}
    <h3>{title}</h3>
  </div>
);

MoviePreview.propTypes = {
  backdrop_path: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default MoviePreview;
