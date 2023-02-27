import { useSearchParams } from 'react-router-dom';
import { Search } from 'components/Search/Search';
import { Section } from 'components/Section/Section';
import { useEffect, useState } from 'react';
import { getSearch } from 'service/api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');


  useEffect(() => {
if(!query) return

    const movieSearch = async () => {
      try {
        setLoading(true);
        const {movies} = await getSearch(query);
        setMovies(movies);
 
        setError(null);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    movieSearch();
  }, [query]);

  useEffect(() => {
    if (!error) return;
    alert(error);
  }, [error]);


  return (
    <>
      <Section>
        <Search />
        {movies.length > 0 && <MoviesList movies={movies}/>}
      </Section>
      {loading && <Loader />}
    </>
  );
};

export default Movies;