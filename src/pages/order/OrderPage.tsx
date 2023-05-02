import React from "react";

import ContainerPage from "../../components/modules/containerPage";

import { MAIN_ROUTE } from "../../types/const";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useCart } from "react-use-cart";
import { Box, Stack } from "@mui/material";
import Text from "../../components/base/Text";
import FormOrder from "../../components/sections/formOrder";
import { DataProvider } from "../../utils/FormContext";
import TableOrder from "./Table/TableOrder";

const breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: MAIN_ROUTE,
  },
  {
    id: 1,
    title: "order",
    link: "",
  },
];

const OrderPage = (): JSX.Element => {
  const { t } = useTranslation();
  const notify = (message: string) => toast(t(message));

  const { items = [], setItems } = useCart();

  const sendData = items.map(({ name, price, quantity }) => {
    return {
      name,
      price,
      quantity,
    };
  });

  const convertToString = JSON.stringify(sendData);

  const sum = items?.map((el) => el.itemTotal);
  const quan = items?.map((el) => el.quantity);

  const initialValue = 0;
  const sumWithInitial = (arr: any) => {
    return arr.reduce(
      (accumulator: number, currentValue: number) => accumulator + currentValue,
      initialValue
    );
  };

  const isOrderWithDiscount = sumWithInitial(sum) > 10000;

  const discount = isOrderWithDiscount ? 10 : 0;
  const sumOrder = sumWithInitial(sum);
  const sumOrderWithDiscount = Math.floor(
    sumOrder - sumOrder * (discount / 100)
  );

  return (
    <ContainerPage name="order" breadcrumbs={breadcrumbs}>
      <Stack mt={4}>
        <Text textAlign="center" fontSize={26} mb={2}>
          { t('selected_products')}
        </Text>

        <Box mb={5}>
          <TableOrder
            itemsData={items}
            sum={sumOrderWithDiscount}
            quanSum={sumWithInitial(quan)}
            discountSum={sumOrder - sumOrderWithDiscount}
            discount={isOrderWithDiscount ? "10%" : "0%"}
          />
        </Box>

        <Text textAlign="center" fontSize={26}>
          { t('form_to_fill')}
        </Text>

        <Text textAlign="center" fontSize={18}>
          {t('after_sending')}
        </Text>

        <DataProvider>
          <FormOrder
            isOrderPage
            isTitle={false}
            isImage={false}
            order={convertToString}
            clearCartClick={() => {
              setItems([]);
              notify("cart_empty");
            }}
          />
        </DataProvider>
      </Stack>
    </ContainerPage>
  );
};

export default OrderPage;
