import { Component } from 'react';
import styles from './Cast.module.css';
import { fetchCast } from '../../services/moviesApi';
import defaultPhoto from '../../silhouette-avatar.png';

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchCast(movieId).then(({ cast }) => this.setState({ cast }));
  }

  render() {
    const { cast } = this.state;
    return (
      <ul className={styles.castList}>
        {cast.map(item => (
          <li key={item.id} className={styles.castListItem}>
            {item.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                alt={item.name}
              />
            ) : (
              <img src={defaultPhoto} alt={item.name} height="300" />
            )}
            <h4> {item.name} </h4>
            <p>
              Character: <span>{item.character}</span>
            </p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
