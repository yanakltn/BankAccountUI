import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import links from "../../data/Links";
import Link from "../../typography/Link";
import P from "../../typography/P";
import Row from "../row";
import Profile from "./profile.svg";
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 5em;
  padding-left: 1.5em;
  padding-right: 3em;
  border-right: 1px solid #dadada;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Li = styled(Row)`
  margin-bottom: 1em;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 1em;
  color: #262626;
`;

const Img = styled.img`
  margin-right: 1em;
`;

function Navigation() {
  return (
    <Nav>
      <Ul>
        {links.map((link) => (
          <Li>
            <Link to={link.path}>
              <Icon icon={link.icon} />
              <P>{link.name}</P>
            </Link>
          </Li>
        ))}
      </Ul>
      <Row>
        <Img src={Profile} alt="" />
        <P fontSize="18px">Profile</P>
      </Row>
    </Nav>
  );
}
export default Navigation;
