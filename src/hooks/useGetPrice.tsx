const useGetPrice = () => {
  const eur = localStorage.getItem("eur");

  const well_currency_site = 50;

  const price_site = (purchase_price: number) => {
    return Math.floor(
      (purchase_price + purchase_price * (well_currency_site / 100)) *
        Number(eur)
    );
  };

  return { price_site };
};

export default useGetPrice;
