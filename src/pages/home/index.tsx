import React, { useEffect } from "react";
import styled from "styled-components";
import AccountsList from "../../components/accounts-list";
import CurrencyAccountProfile from "../../components/currency-account-profile";
import Navigation from "../../components/navigation";
import Row from "../../components/row";
import { fetchAccounts } from "../../services/accounts";
import Currency from "../../types/Currency";
import ReactLoading from "react-loading";

const Layout = styled(Row)`
  width: 100%;
  height: 100%;
`;

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Home() {
  const [accounts, setAccounts] = React.useState<Currency[]>([]);
  const [selected, setSelected] = React.useState(accounts[0]);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    fetchAccounts().then((accounts) => {
      setAccounts(accounts);
      setIsLoading(false);
      setSelected(accounts[0]);
    });
  }, []);

  return (
    <Layout>
      <Navigation />
      {isLoading ? (
        <LoaderWrapper>
          <ReactLoading type="spin" height={"20%"} width={"20%"} />
        </LoaderWrapper>
      ) : (
        <>
          <AccountsList
            selected={selected}
            onSelect={setSelected}
            showActionBar={true}
            accounts={accounts}
          />
          <CurrencyAccountProfile
            balance={selected?.balance}
            currency={selected?.currency}
            title={selected?.title}
          />
        </>
      )}
    </Layout>
  );
}

export default Home;
