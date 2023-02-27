import { useParams, useLocation, NavLink } from 'react-router-dom';
import { routes } from 'routes';
import { useState, useEffect } from 'react';
import { BackButton } from 'components/BackButton/BackButton';
import { Loader } from 'components/Loader/Loader';
import { Section } from 'components/Section/Section';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { getDetails } from 'service/api';
import { Outlet } from 'react-router-dom';
import { Container, Title, ListItem } from './MovieDetail.styled';


const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;

    const getMoviesDetails = async () => {
      try {
        setLoading(true);
        const movie = await getDetails(movieId);
        setMovie(movie);

        setError(null);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };
    getMoviesDetails();
  }, [movieId]);

  useEffect(() => {
    if (!error) return;
    alert(error);
  }, [error]);

  const backPath = location.state?.from ?? routes.HOME;

  return (
    <>
      <BackButton path={backPath} />
      {loading && <Loader />}
      <Section>
        <MovieInfo {...movie} />
      </Section>
      <Container>
        <Title>Additional information</Title>
        <ul>
          <ListItem>
            <NavLink to="cast" state={{ from: backPath }}>
              Cast
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="reviews" state={{ from: backPath }}>
              Reviews
            </NavLink>
          </ListItem>
          <Outlet />
        </ul>
      </Container>
      
    </>
  );
};

export default MovieDetail;
