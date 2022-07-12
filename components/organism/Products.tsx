import React from "react";

import styles from "../../styles/Products.module.css";

import { IProduct } from "../../types";
import Card from "../molecules/Card"

const Products: React.FC<{product: IProduct[]}>  = (props: {
  product: IProduct[];
}): JSX.Element => {
  const cards = props.product.map((item, i) => {
    return <Card key={i} item={item} index={i}/>;
  });

  return <div className={styles.grid}>{cards}</div>;
}; 

export default Products;