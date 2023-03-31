import React from "react";
import cn from "classnames";

import "./Pagination.scss";

const Pagination = ({ page, onChange, defaultPage, count }) => {
  const arr = [...Array(count).keys()].map((x) => ++x);
  return (
    <div className="pagination d-flex align-center">
      <span
        className={cn("button-prev", page <= 1 ? 'disable' : '')}
        onClick={() => onChange(Number(page - 1))}
      ></span>
      {arr?.map((item) => (
        <span
          key={`pagination-number_${item}`}
          className={cn("button-num", page === item ? "active" : "")}
          onClick={() => onChange(Number(item))}
        >
          {item}
        </span>
      ))}
      <span
        className={cn("button-next", page >= count ? 'disable' : '')}
        onClick={() => onChange(Number(page + 1))}
      ></span>
    </div>
  );
};

export default Pagination;
