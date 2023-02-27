import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Links = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  margin: 30px;

  :hover {
    color: red;
  }
`;