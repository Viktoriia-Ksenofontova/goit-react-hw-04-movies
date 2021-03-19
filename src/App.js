import { Redirect, Route, Switch } from 'react-router';
import { Suspense, lazy } from 'react';
import Spinner from './components/Loader/Loader';
import Header from './components/Header/Header';
import routes from './routes';
import './App.css';

const HomePage = lazy(() =>
  import('./views/HomePage/HomePage' /*webpackChunkName: "home-page"*/),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage/MoviesPage' /*webpackChunkName: "movies-page"*/),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage' /*webpackChunkName: "movies-details-page"*/
  ),
);

const App = () => (
  <>
    <div className="App">
      <Header />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </div>
  </>
);

export default App;
