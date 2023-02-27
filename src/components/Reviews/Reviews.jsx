import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { getReviews } from 'service/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const getMoviesReviews = async () => {
      try {
        setLoading(true);
        const reviews = await getReviews(movieId);
        setReviews(reviews);

        setError(null);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    getMoviesReviews();
  }, [movieId]);

  useEffect(() => {
    if (!error) return;
    alert(error);
  }, [error]);

  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p>
                  Author: <span>{author}</span>
                </p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}

      {loading && <Loader />}
    </>
  );
};

export default Reviews;