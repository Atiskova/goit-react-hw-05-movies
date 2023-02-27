import { Links } from './BackButton.styled';
import PropTypes from 'prop-types';

export const BackButton = ({ path }) => {
  return (
    <Links
      to={path}
    >
      ⬅ Go back
    </Links>
  );
};

BackButton.propTypes = {
  path: PropTypes.object.isRequired,
};