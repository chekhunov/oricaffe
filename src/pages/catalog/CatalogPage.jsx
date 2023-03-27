import React, { useState } from "react";

import ContainerPage from "../../components/modules/containerPage";
import Loader from "../../components/elements/loader";
import Center from "../../components/elements/center";
import { useGetProducts } from "../../api/productList";
import { useGetNavMenu } from "../../api/navMenu";
import { useTranslation } from "react-i18next";
import ProductsCard from "../../components/elements/productsCard";

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
  const [productCategory, setProductCategory] = useState("coffee");
  const { t } = useTranslation();
  const { data: productsData, isLoadingProducts } = useGetProducts();
  const { data: categoryData, isLoading: isLoadingCategory } = useGetNavMenu();
  const { category } = categoryData;
  const { products } = productsData;

  const filterProducts = products?.filter(
    (item) => item.category === productCategory
  );

  const handleClick = (name) => {
    console.log(name);
    setProductCategory(name);
  };

  console.log(filterProducts);

  return (
    <ContainerPage name="catalog" breadcrumbs={breadcrumbs}>
      <div className="catalog__block d-flex justify-center">
        <div className="catalog__nav">
          <div className="catalog__category">
            <div className="catalog__title">{t("category_coffee")}</div>

            <Divider />
            <div className="mb-20"></div>

            {isLoadingCategory ? (
              <Center>
                <Loader />
              </Center>
            ) : (
              category?.map((item) => (
                <div
                  className="catalog__category-item mb-10"
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
            <Center>
              <Loader />
            </Center>
          ) : (
            <div className="catalog__items">
              {filterProducts?.map((item, index) => (
                <ProductsCard {...item} sx={{ marginRight: "20px" }} />
              ))}
            </div>
          )}
        </div>
      </div>
    </ContainerPage>
  );
};

export default CatalogPage;
