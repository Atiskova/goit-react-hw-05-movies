import PropTypes from 'prop-types';
import { formatDate } from 'helpers/formatDate';
import { Container } from './MovieInfo.styled';

export const MovieInfo = ({
  poster_path,
  title,
  name,
  release_date,
  vote_average,
  overview,
  genres,
}) => {
  const getPoster = () => {
    if (poster_path) {
      return `https://image.tmdb.org/t/p/w500/${poster_path}`;
    } else {
      return 'https://dummyimage.com/300x450/ccc/fff.jpg&text=No+poster';
    }
  };

  return (
    <Container>
      <div>
        <img src={getPoster()} alt={title || name} width='300'/>
      </div>
      <div>
        <div>
          <h1>
            {title || name} (
            <span>
              {''}
              {release_date && formatDate(release_date)}
            </span>
            )
          </h1>
        </div>

        <div>
          <p>
            User Score: <span>{Math.round(vote_average * 10)}%</span>
          </p>
        </div>

        <div>
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>

        <div>
          <h2>Genres</h2>
          <p>{genres && genres.map(el => `${el.name} `)}</p>
        </div>
      </div>
    </Container>
  );
};

MovieInfo.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  release_date: PropTypes.string,
};
