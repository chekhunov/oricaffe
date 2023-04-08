import React from "react";
import { useParams } from "react-router-dom";

import ContainerPage from "../../../../components/modules/containerPage";
import { Skeleton } from "react-skeleton-generator";
import { useGetProductCardDetail } from "../../../../api/productCardDetails";
import Center from "../../../../components/elements/center";
import { useTranslation } from "react-i18next";
import useGetPrice from "../../../../hooks/useGetPrice";

import "./ProductCardDetails.scss";
import { MAIN_ROUTE, SHOP_ROUTE } from '../../../../types/const';

const ProductCardDetails = () => {
  const { t } = useTranslation();
  let { id: productCode } = useParams();

  const params = { code: productCode };

  const { price_site } = useGetPrice();

  const { data, isLoading } = useGetProductCardDetail(params);

  const { filterData } = data || {};

  const {
    id,
    category,
    name,
    cost,
    desc,
    sort,
    weight,
    weight_box,
    imgUrl,
    info,
  } = filterData || {};

  const breadcrumbs = [
    {
      id: 0,
      title: "home",
      link: MAIN_ROUTE,
    },
    {
      id: 1,
      title: "catalog",
      link: SHOP_ROUTE + `/${category ? category : "coffee"}`,
    },
    {
      id: 2,
      title: "category-name",
      link: "",
    },
  ];

  return (
    <ContainerPage name="card_details" breadcrumbs={breadcrumbs}>
      <div className="card-details__content d-flex justify-center">
        {isLoading ? (
          <Skeleton.SkeletonThemeProvider>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Skeleton width="50px" height="50px" borderRadius="50%" />

              <div style={{ width: "400px" }}>
                <Skeleton
                  borderRadius="10px"
                  count={3}
                  widthMultiple={["100%", "50%", "75%"]}
                  heightMultiple={["50px", "20px", "15px"]}
                />
              </div>
            </div>
          </Skeleton.SkeletonThemeProvider>
        ) : productCode ? (
          <div className="card-details__inner">
            <div className="card-details__title title">{name}</div>
            <div className="card-details__box d-flex">
              <img
                className="card-details__img"
                src={`/${imgUrl}`}
                alt="card-details"
              />

              <div className="card-details__info d-flex flex-column">
                <span className="card-details__code">
                  Code product: {`10000${id}`}
                </span>
                <span className="card-details__price">
                  Price: {price_site(cost)}
                </span>
                <span className="card-details__desc">{desc}</span>
                <span className="card-details__desc">{info}</span>
                <span className="card-details__desc">{sort}</span>
                <span className="card-details__desc">{weight}</span>
                <span className="card-details__desc">{weight_box}</span>
              </div>
            </div>
          </div>
        ) : (
          <Center sx={{ width: "100%" }}>
            <div>{t("there_is_currently")}</div>
          </Center>
        )}
      </div>
    </ContainerPage>
  );
};

export default ProductCardDetails;
