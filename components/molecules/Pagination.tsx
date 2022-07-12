import React, { Dispatch, SetStateAction} from "react";
import Image from "next/image";

import styles from "../../styles/Pagination.module.css";

import PaginationLisItem from "../atoms/PaginationListItem"
import chevLeft from "../../public/chevron-left.png"
import chevRight from "../../public/chevron-right.png"

interface IProps {
  page: { current_page: number; total_pages: number };
  setPage: Dispatch<
    SetStateAction<{
      current_page: number;
      total_pages: number;
    }>
  >;
}

const Pagination = ({page, setPage}: IProps): JSX.Element => {

  const getArrayKeys = Array(page.total_pages).keys();
  const totalPagesKeysArray = Array.from(getArrayKeys);
  const ArrayOfNumbers = totalPagesKeysArray.map((x) => x++).slice(1);

  const handlePagination = (pageNumber: number) => {
      setPage(prevState => ({...prevState, current_page: pageNumber}))
  };

  // This will only return the 5 nearest list elements of the current page;
  const sliceArrayOfNumbers = (startTrim: number, endTrim: number): number[]=> {
    return ArrayOfNumbers
      .slice(startTrim, endTrim)
      .map((item) => item );
  }
  // handles which numbers to render based on the current page
  const PageIndexHandler = () => {
    // returns the 5 nearest number of pages
    if (page.current_page > 3 && page.current_page < page.total_pages - 5) {
      return sliceArrayOfNumbers(page.current_page - 3, page.current_page + 2);
    }
    // returns the 5 last number of pages
    if (page.total_pages - page.current_page < 5) {
      return sliceArrayOfNumbers(-6, -1);
    }

    // returns the first 5 number of pages
    return sliceArrayOfNumbers(0, 5);
  }
  // get the list elements of relevant index numbers to be displayed
  const PageIndex = PageIndexHandler().map((i) => (
    <PaginationLisItem
      key={i}
      currentPage={page.current_page}
      page={i}
      handlePagination={handlePagination}
    />
  ));
  
  return (
    <ul className={styles.list}>
      {page.current_page > 1 && (
        <div
          className={styles.listItem}
          onClick={() => handlePagination(page.current_page - 1)}
        >
          <Image src={chevLeft} alt="previous" />
        </div>
      )}
      {page.current_page > 3 && (
        <>
          <PaginationLisItem
            key={1}
            currentPage={page.current_page}
            page={1}
            handlePagination={handlePagination}
          />
          <div className={styles.dots}>···</div>
        </>
      )}
      {PageIndex}
      {page.total_pages - page.current_page > 5 && (
          <div className={styles.dots}>···</div>
      )}
      <PaginationLisItem
        key={page.total_pages}
        currentPage={page.current_page}
        page={page.total_pages}
        handlePagination={handlePagination}
      />
      {page.current_page < page.total_pages && (
        <div
          className={styles.listItem}
          onClick={() => handlePagination(page.current_page + 1)}
        >
          <Image src={chevRight} alt="previous" />
        </div>
      )}
    </ul>
  );
};


export default Pagination;