import axios from 'axios';
import { Component } from 'react';
import styles from './Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const key = '4be86c5d69c0686630f3d09c89fd54d0';
    const { movieId } = this.props.match.params;
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`,
    );

    this.setState({ reviews: res.data.results });
  }

  render() {
    const { reviews } = this.state;
    return reviews.length > 0 ? (
      <ul className={styles.reviewsList}>
        {reviews.map(review => (
          <li key={review.id}>
            <h4>
              Author: <span> {review.author} </span>{' '}
            </h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>We don't have any reviews for this movie.</p>
    );
  }
}

export default Reviews;
