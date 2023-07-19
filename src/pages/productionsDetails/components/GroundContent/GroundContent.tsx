import { FC } from "react";
import { Stack } from "@mui/material";
import Text from "../../../../components/base/Text";
import { useTranslation } from "react-i18next";
import "./GroundContent.scss";

const GroundContent: FC = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Stack mt={4} mb={4}>
      <Text textAlign="center" fontSize={26} mb={2}>
        {t("about_products.ground_coffee")}
      </Text>

      <Text textAlign="left" fontSize={18} mb={2}>
        {t("ground_population")}
      </Text>

      <img
        className="grain-details__img"
        height={300}
        src="/baners/ground-detail.webp"
        alt="ground"
      />

      <Text textAlign="left" fontSize={16} mb={2}>
        {t("ground_first")}
      </Text>

      <Text textAlign="left" fontSize={16} mb={2}>
        {t("testy_coffee")}
      </Text>

      <Text textAlign="left" fontSize={16} mb={2}>
        {t("buy_ground")}
      </Text>

      <Text textAlign="left" fontSize={16} mb={2}>
        {t("grinding_coffee_beans")}
      </Text>
    </Stack>
  );
};

export default GroundContent;
