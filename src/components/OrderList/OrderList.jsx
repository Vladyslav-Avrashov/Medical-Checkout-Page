import OrderItem from "../OrderItem/OrderItem";
import styles from "./OrderList.module.css";

const OrderList = ({ items }) => {
  return (
    <div className={styles.orderList}>
      {items.map((item) => (
        <OrderItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default OrderList;
