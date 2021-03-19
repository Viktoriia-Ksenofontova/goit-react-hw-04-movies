import { Component } from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import styles from './MovieDetailsPage.module.css';
import routes from '../../../src/routes';
import { fetchMovieDetails } from '../../services/moviesApi';

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    title: null,
    overview: null,
    vote_average: null,
    genres: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchMovieDetails(movieId).then(data => this.setState({ ...data }));
  }

  handleBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.handleBack}>
          Back
        </button>
        <MovieCard {...this.state} />

        <h3 className={styles.subtitle}> Additional information:</h3>
        <NavLink
          className={styles.link}
          activeClassName={styles.linkActive}
          to={{
            pathname: `${this.props.match.url}/cast`,
            state: this.props.location.state,
          }}
        >
          Cast
        </NavLink>

        <NavLink
          className={styles.link}
          activeClassName={styles.linkActive}
          to={{
            pathname: `${this.props.match.url}/reviews`,
            state: this.props.location.state,
          }}
        >
          Reviews
        </NavLink>

        <Route path={`${this.props.match.path}/cast`} component={Cast} />
        <Route path={`${this.props.match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default withRouter(MovieDetailsPage);
