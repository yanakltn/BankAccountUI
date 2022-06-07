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
  const [selected, setSelected] = React.useState(accounts[0]);

  return (
    <Layout>
      <Navigation />
      <AccountsList
        selected={selected}
        onSelect={setSelected}
        showActionBar={true}
      />
      <CurrencyAccountProfile
        balance={selected.balance}
        currency={selected.currency}
        title={selected.title}
      />
    </Layout>
  );
}

export default Home;
