import { Component } from 'react';
import { fetchReviews } from '../../services/moviesApi';
import styles from './Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchReviews(movieId).then(({ results }) =>
      this.setState({ reviews: results }),
    );
  }

  render() {
    const { reviews } = this.state;
    return reviews.length > 0 ? (
      <ul className={styles.reviewsList}>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4>
              Author: <span>{author}</span>
            </h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>We don't have any reviews for this movie.</p>
    );
  }
}

export default Reviews;
