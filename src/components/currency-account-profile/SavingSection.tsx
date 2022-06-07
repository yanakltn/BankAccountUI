import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { ReactComponent as Avatar1 } from "./avatar1.svg";
import { ReactComponent as Avatar2 } from "./avatar2.svg";
import { ReactComponent as Avatar3 } from "./avatar3.svg";

const Layout = styled.div`
  background: #ffffff;
  border: 1px solid #b5b5b5;
  border-radius: 30px;
  margin-top: 1em;
  & > div:first-child {
    border-bottom: 1px solid #b5b5b5;
  }
`;

const Caption = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.374px;
  color: #b5b5b5;
  margin-left: 0.5em;
`;

const Span = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.374px;
  color: #262626;
  flex: 1;
  text-align: right;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.5em;
  align-items: center;
`;
const Avatars = styled.div`
  flex: 1;
  text-align: right;
`;
function SavingSection() {
  return (
    <Layout>
      <Wrapper>
        <FontAwesomeIcon icon={faPiggyBank} />
        <Caption>Passive Saving</Caption>
        <Span>Enabled 20%</Span>
      </Wrapper>
      <Wrapper>
        <Caption>Share Account</Caption>
        <Avatars>
          <Avatar1 />
          <Avatar2 />
          <Avatar3 />
        </Avatars>
      </Wrapper>
    </Layout>
  );
}
export default SavingSection;
