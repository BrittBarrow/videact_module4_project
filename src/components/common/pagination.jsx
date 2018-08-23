import React from "react";
import _ from "lodash";
//lodash is a javascript library

const Pagination = props => {
  let { itemsCount, pageSize, onPageChange, currentPage } = props;

  let pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  let pages = _.range(1, pagesCount + 1);
  //need array of page numbers
  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
