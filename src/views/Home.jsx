import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Section } from 'components/Section/Section';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'service/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrending = async () => {
      try {
        setLoading(true);
        const { movies } = await getTrendingMovies();
        setMovies(movies);

        setError(null);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    getTrending();
  }, []);

  useEffect(() => {
    if (!error) return;
    alert(error);
  }, [error]);

  return (
    <>
      <Section>
        <h1>Trending today</h1>
        {movies.length > 0 && <MoviesList movies={movies} />}
      </Section>
      {loading && <Loader />}
    </>
  );
};

export default Home;
