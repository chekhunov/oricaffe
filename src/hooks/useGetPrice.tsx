const useGetPrice = () => {
  const eur = localStorage.getItem("eur");

  const well_currency_opt = 30;
  const well_currency_site = 40;

  const price_opt = (purchase_price: number) => {
    return Math.floor(
      (purchase_price + purchase_price * (well_currency_opt / 100)) *
        Number(eur)
    );
  };
  const price_site = (purchase_price: number) => {
    return Math.floor(
      (purchase_price + purchase_price * (well_currency_site / 100)) *
        Number(eur)
    );
  };

  return { price_opt, price_site };
};

export default useGetPrice;
