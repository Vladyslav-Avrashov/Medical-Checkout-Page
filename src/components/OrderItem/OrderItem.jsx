import styles from "./OrderItem.module.css";

const OrderItem = ({ item }) => {
  const { name, price, quantity, type, color, packs } = item;

  return (
    <div className={styles.orderItem}>
      <div className={styles.itemImage}></div>

      <div className={styles.itemInfo}>
        <span className={styles.itemName}>{name}</span>

        <div className={styles.itemDetails}>
          <span className={styles.detail}>
            {quantity} {type}
          </span>
          <span className={styles.detail}>{color}</span>
          <span className={styles.detail}>{packs}x</span>
        </div>
      </div>

      <div className={styles.itemPrice}>${price}</div>
    </div>
  );
};

export default OrderItem;
