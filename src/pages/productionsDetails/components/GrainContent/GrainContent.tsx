import { FC } from "react";
import { Stack } from "@mui/material";
import Text from "../../../../components/base/Text";
import { useTranslation } from "react-i18next";
import "./GrainContent.scss";

const GrainContent: FC = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Stack mt={4} mb={4}>
      <Text textAlign="center" fontSize={26} mb={2}>
        {t("about_products.grain_coffee")}
      </Text>

      <Text textAlign="left" fontSize={18} mb={2}>
        {t("grain_population")}
      </Text>

      <img
        className="grain-details__img"
        height={300}
        src="/baners/grain-detail.webp"
        alt="grain"
      />

      <Text textAlign="left" fontSize={16} mb={2}>
        {t("grain_first")}
      </Text>

      <Text textAlign="left" fontSize={16} mb={2}>
        {t("after_harvesting")}
      </Text>

      <Text textAlign="left" fontSize={16} mb={2}>
        {t("three_most_common_approaches")} <b>{t("three_approaches")}</b>{" "}
        {t("three_last")}
      </Text>

      <Text textAlign="left" fontSize={16} mb={2}>
        {t("our_roasting_master")}
      </Text>
    </Stack>
  );
};
export default GrainContent;
