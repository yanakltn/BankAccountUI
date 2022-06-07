import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AccountsList from "../../components/accounts-list";
import Navigation from "../../components/navigation";
import Row from "../../components/row";
import H3 from "../../typography/H3";
import ReactLoading from "react-loading";
import { fetchAccounts } from "../../services/accounts";
import Currency from "../../types/Currency";

const Layout = styled(Row)`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #fd3a6c;
  margin-right: 0.5em;
`;

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SendMoney() {
  const [accounts, setAccounts] = useState<Currency[]>([]);
  const [selected, setSelected] = useState(accounts[0]);
  const [isLoading, setIsLoading] = useState(true);

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
            showActionBar={false}
            accounts={accounts}
          />
          <Container>
            <Icon icon={faPaperPlane} />
            <H3>Send Money</H3>
          </Container>
        </>
      )}
    </Layout>
  );
}

export default SendMoney;
