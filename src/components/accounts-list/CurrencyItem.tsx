import React from "react";
import styled from "styled-components";
import Currency from "../../types/Currency";
import P from "../../typography/P";

type Props = {
  currency: Currency;
  selected: boolean;
  onClick: () => void;
};

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  background: #ffffff;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  margin-bottom: 1em;
  position: relative;
  cursor: pointer;
  &.selected {
    background: linear-gradient(180deg, #fd3a6c 0%, #f5855c 100%);
    box-shadow: 0px 0px 7px #ee4874;
    color: white;
    left: 2em;
  }

  &.selected p {
    color: white;
  }

  &.selected div {
    background-color: white !important;
    color: #fb4b69;
  }

  &.selected::before {
    width: 10px;
    height: 10px;
    position: absolute;
    left: -1.5em;
    background-color: #fd3a6c;
    content: "";
    top: 50%;
    transform: translate(0, -50%);
    border-radius: 100%;
  }
`;

const CurrencyText = styled(P)`
  font-size: 15px;
  line-height: 22px;
`;

const CurrencyBackground = styled.div`
  border-radius: 100%;
  height: 20px;
  width: 20px;
  color: white;
  margin-right: 0.5em;
  text-align: center;
  line-height: 20px;
`;

const BalanceText = styled(P)`
  flex: 1;
  text-align: right;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  min-width: 250px;
`;

function CurrencyIcon({ currency }: { currency: string }) {
  if (currency === "usd") {
    return (
      <CurrencyBackground
        style={{
          backgroundColor: "#F5855C",
        }}
      >
        $
      </CurrencyBackground>
    );
  } else if (currency === "eur") {
    return (
      <CurrencyBackground
        style={{
          backgroundColor: "#42507F",
        }}
      >
        €
      </CurrencyBackground>
    );
  } else if (currency === "gbp") {
    return (
      <CurrencyBackground
        style={{
          backgroundColor: "red",
        }}
      >
        £
      </CurrencyBackground>
    );
  } else {
    return (
      <CurrencyBackground
        style={{
          backgroundColor: "#FFAC30",
        }}
      >
        ₩
      </CurrencyBackground>
    );
  }
}

function CurrencyItem({ currency, selected, onClick }: Props) {
  return (
    <Layout className={`${selected ? "selected" : ""}`} onClick={onClick}>
      <CurrencyIcon currency={currency.currency} />
      <CurrencyText>{currency.title}</CurrencyText>
      <BalanceText>{currency.balance}</BalanceText>
    </Layout>
  );
}

export default CurrencyItem;
