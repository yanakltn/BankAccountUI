import { faCoins, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  background: #ffffff;
  border: 1px solid #b5b5b5;
  border-radius: 30px;

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
function TopUpSection() {
  return (
    <Layout>
      <Wrapper>
        <FontAwesomeIcon icon={faSquareCheck} />
        <Caption>Account Type:</Caption>
        <Span>Personal</Span>
      </Wrapper>
      <Wrapper>
        <FontAwesomeIcon icon={faCoins} />
        <Caption>Currency</Caption>
        <Span>Euro EUR</Span>
      </Wrapper>
    </Layout>
  );
}

export default TopUpSection;
