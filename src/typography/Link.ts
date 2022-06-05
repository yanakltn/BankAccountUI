import { NavLink as RouterLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(RouterLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;

  &.active > p,
  &.active > svg {
    color: #fd3a6c;
  }
`;

export default Link;
