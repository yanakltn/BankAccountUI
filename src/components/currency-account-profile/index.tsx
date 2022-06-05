import React from "react";
import Currency from "../../types/Currency";
import SavingSection from "./SavingSection";
import SectionBalance from "./SectionBalance";
import SectionQuickTransaction from "./SectionQuickTransaction";
import TopUpSection from "./TopUpSection";

function CurrencyAccountProfile(currency: Currency) {
  return (
    <div>
      <SectionBalance
        title={currency.title}
        balance={currency.balance}
        currency={currency.currency}
      />
      <SectionQuickTransaction />
      <TopUpSection />
      <SavingSection />
    </div>
  );
}

export default CurrencyAccountProfile;
