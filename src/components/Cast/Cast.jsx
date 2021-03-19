import axios from 'axios';
import { Component } from 'react';
import styles from './Cast.module.css';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const key = '4be86c5d69c0686630f3d09c89fd54d0';
    const { movieId } = this.props.match.params;
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`,
    );
    this.setState({ cast: res.data.cast });
    console.log(res.data.cast);
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
                alt=""
              />
            ) : null}
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
