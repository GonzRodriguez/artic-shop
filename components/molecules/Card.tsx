import Image from "next/image";

import styles from "../../styles/Card.module.css";

import { IProduct } from "../../types"

const Card: React.FC<{item: IProduct, index: number}> = (props: {item: IProduct, index: number}): JSX.Element => {
  return (
    <div className={styles.card} >
      <Image
        src={props.item.image_url}
        width={300}
        height={300}
        alt="product"
        className={styles.cardImage}
      />
      <div className={styles.cardText}>
        <h3>{props.item.title}</h3>
        <h1>${props.item.max_current_price}</h1>
      </div>
    </div>
  );
}

export default Card