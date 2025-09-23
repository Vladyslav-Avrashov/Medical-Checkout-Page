import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderList from "../OrderList/OrderList";
import styles from "./OrderSummary.module.css";
import {
  selectCartItems,
  selectCartSubTotal,
  selectCartTotalWithShipping,
} from "../../redux/cart/selectors";
import { fetchCart } from "../../redux/cart/operations";

const PROMO_CODE = "DISCOUNT10";
const DISCOUNT_AMOUNT = 20;

const OrderSummary = ({ isSubmitting }) => {
  const dispatch = useDispatch();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [isEditable, setIsEditable] = useState(true);

  const items = useSelector(selectCartItems);
  const subTotal = useSelector(selectCartSubTotal);
  const totalWithShipping = useSelector(selectCartTotalWithShipping);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleApplyPromoCode = () => {
    if (promoCode === PROMO_CODE) {
      setDiscount(DISCOUNT_AMOUNT);
      setIsPromoApplied(true);
      setIsEditable(false);
      toast.success(`Promo code applied: -$${DISCOUNT_AMOUNT}`);
    } else {
      setDiscount(0);
      setIsPromoApplied(false);
      toast.error("Invalid promo code!");
    }
  };

  const handleChangePromoCode = () => {
    setPromoCode("");
    setIsPromoApplied(false);
    setDiscount(0);
    setIsEditable(true);
  };

  const total = totalWithShipping - discount;

  return (
    <div className={styles.orderSummary}>
      <h2>Order Summary</h2>

      <OrderList items={items} />

      <div className={styles.promoCode}>
        <h4>Apply Promocode</h4>
        <div className={styles.promoCodeContainer}>
          <input
            type="text"
            id="promoCode"
            name="promoCode"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Promotion or Discount code"
            className={isPromoApplied ? styles.promoCodeApplied : ""}
            disabled={!isEditable}
          />
          {isPromoApplied ? (
            <button
              type="button"
              className={styles.changePromoButton}
              onClick={handleChangePromoCode}
            >
              Change Code
            </button>
          ) : (
            <button
              type="button"
              className={styles.applyPromoButton}
              onClick={handleApplyPromoCode}
            >
              Apply Code
            </button>
          )}
        </div>
        {discount > 0 && (
          <p className={styles.promoSuccess}>
            Promo code applied: -${discount}
          </p>
        )}
      </div>

      <div className={styles.summaryDetails}>
        <div className={styles.summaryItem}>
          <span>Sub total</span>
          <span>${subTotal}</span>
        </div>
        <div className={styles.summaryItem}>
          <span>Shipping Fee</span>
          <span>${totalWithShipping - subTotal}</span>
        </div>
        <div className={styles.summaryItem}>
          <span>Total</span>
          <span className={styles.total}>${total}</span>
        </div>
      </div>

      <button
        type="submit"
        className={styles.checkoutButton}
        disabled={isSubmitting || items.length === 0}
      >
        {isSubmitting ? "Placing Order..." : "Checkout"}
      </button>

      <ToastContainer />
    </div>
  );
};

export default OrderSummary;
