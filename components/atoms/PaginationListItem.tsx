
import styles from "../../styles/Pagination.module.css";

interface IProps {
  currentPage: number;
  page: number;
  handlePagination: (pageNumber: number) => void;
}

const PaginationListItem = (props: IProps): JSX.Element => {
  let itemStyle = styles.listItem;
  // add multiple styles if is curren page.
  if (props.currentPage === props.page) {
    itemStyle = [styles.listItem, styles.currentListItem].join(" ");
  }
  return (
    <li
      className={itemStyle}
      onClick={() => props.handlePagination(props.page)}
    >
      {props.page}
    </li>
  );
};

export default PaginationListItem