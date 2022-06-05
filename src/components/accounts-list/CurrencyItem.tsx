import React from "react";
import Currency from "../../types/Currency";

function CurrencyItem(currency: Currency) {
  return (
    <div>
      <p>{currency.title}</p>
      <p>{currency.balance}</p>
    </div>
  );
}

export default CurrencyItem;
