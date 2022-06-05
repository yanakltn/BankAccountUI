import React from "react";
import styled from "styled-components";
import AccountsList from "../../components/accounts-list";
import CurrencyAccountProfile from "../../components/currency-account-profile";
import Navigation from "../../components/navigation";
import Row from "../../components/row";
import accounts from "../../data/Accounts";

const Layout = styled(Row)`
  width: 100%;
  height: 100%;
`;

function Home() {
  return (
    <Layout>
      <Navigation />
      <AccountsList />
      <CurrencyAccountProfile
        balance={accounts[0].balance}
        currency={accounts[0].currency}
        title={accounts[0].title}
      />
    </Layout>
  );
}

export default Home;
