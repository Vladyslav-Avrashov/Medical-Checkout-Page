import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cart/operations";
import styles from "./OrderItem.module.css";
import { FaTrash } from "react-icons/fa";

const OrderItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, price, quantity, type, color } = item;

  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };
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
          <span className={styles.detail}>4x</span>
        </div>
      </div>

      <div className={styles.itemPrice}>${price}</div>
      <button
        type="button"
        className={styles.removeButton}
        onClick={handleRemove}
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default OrderItem;
