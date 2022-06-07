import React, { useState } from "react";
import styled from "styled-components";
import Currency from "../../types/Currency";
import H3 from "../../typography/H3";
import AccountActionItems from "./AccountActionItems";
import CurrencyItem from "./CurrencyItem";

type Props = {
  selected: Currency;
  onSelect: (value: Currency) => void;
  showActionBar: boolean;
  accounts: Currency[];
};

const Layout = styled.div`
  padding-left: 2.5em;
  padding-right: 2.5em;
  padding-top: 1em;
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  flex: 1;
`;

function AccountsList({ selected, onSelect, showActionBar, accounts }: Props) {
  return (
    <Layout>
      <H3>Your accounts</H3>
      <List>
        {accounts.map((acc) => (
          <CurrencyItem
            currency={acc}
            selected={acc === selected}
            key={acc.currency}
            onClick={() => onSelect(acc)}
          />
        ))}
      </List>
      {showActionBar && <AccountActionItems />}
    </Layout>
  );
}
export default AccountsList;
