import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import Currency from "../../types/Currency";

const Caption = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.374px;
  color: #b5b5b5;
  margin: 0;
`;

const Balance = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 72px;
  letter-spacing: 0.374px;
  color: #262626;
  margin: 0;
`;

const Button = styled.div`
  background: #ffffff;
  border: 1px solid #fd3a6c;
  border-radius: 20px;
  padding: 1em;
  color: #fd3a6c;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TopUp = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  margin-left: 0.5em;
  text-align: center;
  letter-spacing: 0.374px;
`;

function SectionBalance(currency: Currency) {
  const getSymbol = (currency: string) => {
    if (currency === "usd") {
      return "$";
    } else if (currency === "eur") {
      return "€";
    } else if (currency === "gbp") {
      return "£";
    } else {
      return "₩";
    }
  };
  return (
    <div>
      <Caption>Balance</Caption>
      <Row>
        <Balance>
          {getSymbol(currency.currency)}
          {currency.balance}
        </Balance>
        <Button>
          <FontAwesomeIcon icon={faPiggyBank} />
          <TopUp>Top up</TopUp>
        </Button>
      </Row>
    </div>
  );
}

export default SectionBalance;
