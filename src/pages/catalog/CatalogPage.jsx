import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { pageRoutes } from "../../utils/routes";
import Pagination from "../../components/modules/pagination";

import cn from "classnames";
import { Skeleton } from "react-skeleton-generator";
import ContainerPage from "../../components/modules/containerPage";
import Loader from "../../components/elements/loader";
import Center from "../../components/elements/center";
import { useGetProducts } from "../../api/productList";
import { useGetNavMenu } from "../../api/navMenu";
import { useTranslation } from "react-i18next";
import ProductsCard from "../../components/elements/productsCard";
import useWellCurrency from '../../hooks/useWellCurrency'

import "./Catalog.scss";
import { Divider } from "@material-ui/core";

const breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: "",
  },
  {
    id: 1,
    title: "catalog",
    link: "",
  },
];

const CatalogPage = () => {
  const { t } = useTranslation();

  let navigate = useNavigate();

  let { category } = useParams();

  const { eurData } = useWellCurrency();

  const [productCategory, setProductCategory] = useState(category);

  const productsLimit = 9;
  const [page, setPage] = useState(1);

  const params = { page, limit: productsLimit, productCategory };

  const { data: productsData, isLoading: isLoadingProducts } =
    useGetProducts(params);

  const { products, count } = productsData || [];

  const isPaginationShow = count > 1;

  const { data: categoryData, isLoading: isLoadingCategory } = useGetNavMenu();
  const { category: categoryItems } = categoryData;

  const handleClick = (name) => {
    navigate(`${pageRoutes.catalog}/${name}`);
    setProductCategory(name);
    setPage(1);
  };

  useEffect(() => {
    if (category) {
      setProductCategory(category);
    }
  }, [category, page]);

  console.log(products)

  return (
    <ContainerPage name="catalog" breadcrumbs={breadcrumbs}>
      <div className="catalog__block d-flex justify-center">
        <div className="catalog__nav">
          <div className="catalog__category">
            <div className="catalog__title">{t("category_coffee")}</div>

            <Divider orientation="horizontal" />
            <div className="mb-20"></div>

            {isLoadingCategory ? (
              <Center>
                <Loader />
              </Center>
            ) : (
              categoryItems?.map((item) => (
                <div
                  key={item.id}
                  className={cn(
                    "catalog__category-item mb-10",
                    item.name === category ? "active" : ""
                  )}
                  onClick={() => handleClick(item.name)}
                >
                  {t(item.value)}
                </div>
              ))
            )}
          </div>
        </div>
        <div className="catalog__content">
          {isLoadingProducts ? (
            <Skeleton.SkeletonThemeProvider
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {[...Array(6)]?.map((item, index) => (
                <div
                  key={`skeleton-el_${index}`}
                  className="mr-20 mb-20 d-flex justify-center"
                  style={{ width: "304px" }}
                >
                  <div className="d-flex flex-column align-center">
                    <Skeleton
                      width="274px"
                      height="187px"
                      borderRadius="25px 25px 0px 0px"
                    />

                    <Skeleton width="220px" height="26px" borderRadius="10px" />
                    <Skeleton
                      width="100px"
                      height="20px"
                      borderRadius="10px"
                      spaceBetween="30px"
                    />
                    <Skeleton
                      width="170px"
                      height="20px"
                      borderRadius="10px"
                      spaceBetween="10px"
                    />
                    <Skeleton
                      width="170px"
                      height="50px"
                      borderRadius="10px"
                      spaceBetween="20px"
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10px",
                    }}
                  >
                    <Skeleton width="48%" height="50px" borderRadius="10px" />

                    <Skeleton width="48%" height="50px" borderRadius="10px" />
                  </div>
                </div>
              ))}
            </Skeleton.SkeletonThemeProvider>
          ) : (
            <div className="catalog__items">
              {products?.length ? (
                products?.map((item, index) => (
                  <ProductsCard
                    key={`card-prodict_${item.id}`}
                    rate={eurData?.rate}
                    {...item}
                    sx={{ marginRight: "20px" }}
                  />
                ))
              ) : (
                <Center sx={{ width: "100%" }}>
                  <div>{t("there_is_currently")}</div>
                </Center>
              )}
            </div>
          )}

          {isPaginationShow && (
            <Pagination
              page={page}
              onChange={setPage}
              defaultPage={1}
              count={count}
            />
          )}
        </div>
      </div>
    </ContainerPage>
  );
};

export default CatalogPage;
