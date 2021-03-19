import { Component } from 'react';
import MoviesList from '../../components/MoviesList/MoviesList';
import { fetchTrending } from '../../services/moviesApi';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchTrending().then(({ results }) => this.setState({ movies: results }));
  }

  render() {
    return (
      <>
        <h1> Trending today </h1>
        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}
export default HomePage;
