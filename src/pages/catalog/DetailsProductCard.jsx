import React from "react";
import { useParams } from "react-router-dom";

import ContainerPage from "../../components/modules/containerPage";
import { Skeleton } from "react-skeleton-generator";
import { useGetProductCardDetail } from "../../api/productCardDetails";
import Center from "../../components/elements/center";
import { useTranslation } from "react-i18next";
import useGetPrice from "../../hooks/useGetPrice";

const DetailsProductCard = () => {
  const { t } = useTranslation();
  let { id: productCode } = useParams();

  const params = { code: productCode };

  const { price_opt, price_site } = useGetPrice();

  console.log(productCode);

  const { data, isLoading } = useGetProductCardDetail(params);

  console.log(data);

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
      link: "",
    },
    {
      id: 1,
      title: "catalog",
      link: `catalog/${category}`,
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
        ) : id ? (
          <div className="card-details__inner">
            <div className="card-details__title title">{name}</div>
            <div className="card-details__box d-flex">
              <img
                className="card-details__img"
                src={`/${imgUrl}`}
                alt="card-details"
              />

              <div className="card-details__info">
                <span className="card-details__code">Code product: {`10000${id}`}</span>
                <span className="card-details__price">Price: {price_site(cost)}</span>
                <span className="card-details__desc">{desc}</span>
                <span className="card-details__desc">{info}</span>
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

export default DetailsProductCard;
