import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { routes } from 'routes';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies &&
        movies.map(movie => {
          return (
            <li key={movie.id}>
              <NavLink state={{ from: location }} to={'/' + routes.MOVIES + '/' +  movie.id}>
                <span>{movie.title || movie.name}</span>
              </NavLink>
            </li>
          );
        })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
