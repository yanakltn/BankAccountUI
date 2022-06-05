import React from "react";
import accounts from "../../data/Accounts";
import AccountActionItems from "./AccountActionItems";
import CurrencyItem from "./CurrencyItem";

function AccountsList() {
  return (
    <div>
      <h3>Your accounts</h3>
      <div>
        {accounts.map((acc) => (
          <CurrencyItem
            title={acc.title}
            currency={acc.currency}
            balance={acc.balance}
            key={acc.currency}
          />
        ))}
      </div>
      <AccountActionItems />
    </div>
  );
}
export default AccountsList;
