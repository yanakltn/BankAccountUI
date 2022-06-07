import { NavLink as RouterLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(RouterLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  position: relative;

  &.active > p,
  &.active > svg {
    color: #fd3a6c;
  }

  &.active {
    left: 2em;
  }

  &.active::before {
    width: 5px;
    height: 5px;
    position: absolute;
    left: -1.5em;
    background-color: #fd3a6c;
    content: "";
    top: 50%;
    transform: translate(0, -50%);
    border-radius: 100%;
  }
`;

export default Link;
