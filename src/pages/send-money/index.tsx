import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import AccountsList from "../../components/accounts-list";
import Navigation from "../../components/navigation";
import Row from "../../components/row";
import accounts from "../../data/Accounts";
import H3 from "../../typography/H3";

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

function SendMoney() {
  const [selected, setSelected] = React.useState(accounts[0]);

  return (
    <Layout>
      <Navigation />
      <AccountsList
        selected={selected}
        onSelect={setSelected}
        showActionBar={false}
      />
      <Container>
        <Icon icon={faPaperPlane} />
        <H3>Send Money</H3>
      </Container>
    </Layout>
  );
}

export default SendMoney;
