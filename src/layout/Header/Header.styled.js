import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
  border-bottom: 1px solid grey; 
  margin-bottom: 20px;
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  text-transform: capitalize;
  text-decoration: none;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  
  &.active {
    color: red;
  }
`;
