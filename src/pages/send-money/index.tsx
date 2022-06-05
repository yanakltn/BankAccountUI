import React from "react";
import styled from "styled-components";
import AccountsList from "../../components/accounts-list";
import Navigation from "../../components/navigation";
import Row from "../../components/row";

const Layout = styled(Row)`
  width: 100%;
  height: 100%;
`;

function SendMoney() {
  return (
    <Layout>
      <Navigation />
      <AccountsList />
    </Layout>
  );
}

export default SendMoney;
