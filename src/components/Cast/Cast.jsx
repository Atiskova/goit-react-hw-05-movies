import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { getCast } from 'service/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    const getMoviesCast = async () => {
      try {
        setLoading(true);
        const cast = await getCast(movieId);
        setCast(cast);

        setError(null);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    getMoviesCast();
  }, [movieId]);

  useEffect(() => {
    if (!error) return;
    alert(error);
  }, [error]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => {
            const getPoster = () => {
              if (profile_path) {
                return `https://image.tmdb.org/t/p/w500/${profile_path}`;
              } else {
                return 'https://dummyimage.com/500x750/ccc/fff.jpg&text=No+poster';
              }
            };
            return (
              <li key={id}>
                <img src={getPoster()} alt={name} width="150px"/>
                <p>{name}</p>
                <p>
                  Character: <span>{character}</span>
                </p>
              </li>
            );
          })}
        </ul>
      )}
      {cast.length === 0 && <p>We don't have any cast for this movie</p>}
      {loading && <Loader />}
    </>
  );
};

export default Cast;