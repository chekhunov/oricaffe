import { Skeleton } from "react-skeleton-generator";

interface SkeletonCatalogItemProps {
  quantity: number;
}

const SkeletonCatalogItem = ({ quantity }: SkeletonCatalogItemProps) => {
  return (
    <Skeleton.SkeletonThemeProvider
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {[...Array(quantity)]?.map((item, index) => (
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
  );
};

export default SkeletonCatalogItem;
