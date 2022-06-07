import Currency from "../../types/Currency";

export const fetchAccounts = async (): Promise<Currency[]> => {
  const response = await fetch(
    "https://vhmfz744o2.execute-api.eu-west-2.amazonaws.com/dev/data",
    {
      headers: {
        "x-api-key": "ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59",
      },
    }
  );
  const json = await response.json();
  const accounts = json.body.accounts;

  return accounts;
};
