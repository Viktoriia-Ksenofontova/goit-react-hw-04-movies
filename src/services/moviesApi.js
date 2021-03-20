import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const key = '4be86c5d69c0686630f3d09c89fd54d0';

async function fetchTrending() {
  const { data } = await axios.get(`/trending/movie/day?api_key=${key}`);
  const { results } = data;
  return { results };
}

async function fetchMoviesWithQuery(searchQuery) {
  const { data } = await axios.get(
    `/search/movie?api_key=${key}&language=en-US&page=1&query=${searchQuery}`,
  );
  const { results } = data;
  return { results };
}

async function fetchMovieDetails(id) {
  const { data } = await axios.get(
    `/movie/${id}?api_key=${key}&language=en-US`,
  );
  const { poster_path, title, overview, vote_average, genres } = data;
  return { poster_path, title, overview, vote_average, genres };
}

async function fetchCast(id) {
  const { data } = await axios.get(
    `/movie/${id}/credits?api_key=${key}&language=en-US`,
  );
  const { cast } = data;
  return { cast };
}

async function fetchReviews(id) {
  const { data } = await axios.get(
    `/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`,
  );
  const { results } = data;
  return { results };
}

export {
  fetchTrending,
  fetchMoviesWithQuery,
  fetchMovieDetails,
  fetchCast,
  fetchReviews,
};
