import React from "react";
import styled from "styled-components";
import Currency from "../../types/Currency";
import SavingSection from "./SavingSection";
import SectionBalance from "./SectionBalance";
import SectionQuickTransaction from "./SectionQuickTransaction";
import TopUpSection from "./TopUpSection";

const Wrapper = styled.div`
  padding-top: 1.5em;
  flex: 1;
`;

const Layout = styled.div`
  background: #ffffff;
  border-radius: 40px 0px 0px 0px;
  height: 100%;
  padding-top: 4em;
  padding-left: 3em;
  padding-right: 3em;
`;

function CurrencyAccountProfile(currency: Currency) {
  return (
    <Wrapper>
      <Layout>
        <SectionBalance
          title={currency.title}
          balance={currency.balance}
          currency={currency.currency}
        />
        <SectionQuickTransaction />
        <TopUpSection />
        <SavingSection />
      </Layout>
    </Wrapper>
  );
}

export default CurrencyAccountProfile;
