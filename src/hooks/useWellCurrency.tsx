import { useQuery } from "react-query";

const useWellCurrency = () => {
  const { data } = useQuery("wellCurrencyData", () =>
    fetch(
      "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json"
    ).then((response) => response.json())
  );

  const eurData = data?.find((item: any) => item?.cc === "EUR");

  return { eurData };
};

export default useWellCurrency;
