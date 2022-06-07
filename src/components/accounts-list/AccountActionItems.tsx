import {
  faCreditCard,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import H3 from "../../typography/H3";
import P from "../../typography/P";

const Layout = styled.div`
  border: 1px solid #dadada;
  border-radius: 40px 0px 0px 0px;
  width: calc(100% + 5em);
  margin: 0;
  margin-left: -2.5em;
  padding-top: 2em;
  padding-bottom: 1em;
  padding-left: 2em;
  padding-right: 4em;
`;

const ActionItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 1em;
`;

const Caption = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #797979;
  margin: 0;
`;

const Title = styled(H3)`
  margin: 0;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 0.5em;
`;

const Arrow = styled(P)`
  flex: 1;
  text-align: right;
  font-size: 25px;
`;
const Icon = styled(FontAwesomeIcon)`
  margin-right: 1em;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
function AccountActionItems() {
  return (
    <Layout>
      <ActionItem>
        <Icon icon={faCreditCard} />
        <TextWrap>
          <Title>Request a Card</Title>
          <Caption>Get a debit card for free</Caption>
        </TextWrap>
        <Arrow>{">"}</Arrow>
      </ActionItem>
      <ActionItem>
        <Icon icon={faHandHoldingDollar} />
        <TextWrap>
          <Title>Request a Card</Title>
          <Caption>Get a debit card for free</Caption>
        </TextWrap>
        <Arrow>{">"}</Arrow>
      </ActionItem>
    </Layout>
  );
}

export default AccountActionItems;
