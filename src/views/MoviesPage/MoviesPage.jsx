import { Component } from 'react';
import queryString from 'query-string';
import { fetchMoviesWithQuery } from '../../services/moviesApi';
import Searchbar from '../../components/Searchbar';
import MoviesList from '../../components/MoviesList/MoviesList';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    movies: [],
  };

  componentDidMount() {
    const query = this.getQueryFromProps(this.props);
    if (query) {
      this.fetchMovies(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = this.getQueryFromProps(prevProps);
    const nextQuery = this.getQueryFromProps(this.props);

    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
    }
  }

  getQueryFromProps = props => queryString.parse(props.location.search).query;

  fetchMovies = searchQuery => {
    fetchMoviesWithQuery(searchQuery).then(({ results }) =>
      this.setState({ movies: results }),
    );
  };

  onChangeSearchText = searchText => {
    this.setState({
      searchQuery: searchText,
      movies: [],
    });

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${searchText}`,
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onChangeSearchText} />
        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}
export default MoviesPage;

// if (prevState.searchQuery !== this.state.searchQuery) {
//   this.fetchImages(this.state.searchQuery);
// }
