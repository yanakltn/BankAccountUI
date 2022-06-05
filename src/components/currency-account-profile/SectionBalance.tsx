import React from "react";
import Currency from "../../types/Currency";

function SectionBalance(currency: Currency) {
  return (
    <div>
      <caption>Balance</caption>
      <div>
        <h1>{currency.balance}</h1>
        <div>
          <span>icon</span>
          <span>Top up</span>
        </div>
      </div>
    </div>
  );
}

export default SectionBalance;
