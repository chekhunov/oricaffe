import React from "react";

const usePagination = (scrollToId?: string, disableScroll?: boolean) => {
  const [page, setSimplePage] = React.useState<number>(1);

  const setPage = (_event: React.ChangeEvent<unknown>, value: number) => {
    if (!disableScroll) {
      if (scrollToId) {
        document?.getElementById(scrollToId)?.scrollIntoView({
          behavior: "smooth",
        });
      } else {
        window.scrollTo(0, 0);
      }
    }

    setSimplePage(value);
  };

  return { setPage, page: page || 1 };
};

export default usePagination;
