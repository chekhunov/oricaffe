import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import ContainerPage from "../../components/modules/containerPage";
import SkeletonCatalogItem from "./components/SkeletonCatalogItem";
import Loader from "../../components/elements/loader";
import Center from "../../components/elements/center";
import Pagination from "../../components/modules/pagination";
import { Divider } from "@material-ui/core";

import { useGetProducts } from "../../api/productList";
import { useGetNavMenu } from "../../api/navMenu";
import { useTranslation } from "react-i18next";

import ProductCard from "../../components/elements/productCard";
import { MAIN_ROUTE, SHOP_ROUTE } from "../../types/const";

import cn from "classnames";
import "./Catalog.scss";

const breadcrumbs = [
  {
    id: 0,
    title: "home",
    link: MAIN_ROUTE,
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

  const category = useParams().category;
  const [productCategory, setProductCategory] = useState(
    category ? category : "coffee"
  );

  console.log(category, "dddssd");
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
    navigate(SHOP_ROUTE + `/${name}`);
    setProductCategory(name);
    setPage(1);
  };

  useEffect(() => {
    if (category) {
      setProductCategory(category);
    }
  }, [category, page]);

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
            <SkeletonCatalogItem quantity={6} />
          ) : (
            <div className="catalog__items">
              {products?.length ? (
                products?.map((item) => (
                  <ProductCard
                    key={`card-prodict_${item.id}`}
                    sx={{ marginRight: "20px" }}
                    {...item}
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
