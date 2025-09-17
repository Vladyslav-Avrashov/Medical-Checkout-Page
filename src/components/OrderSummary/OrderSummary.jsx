import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  SHIPPING_FEE,
  PROMO_CODE,
  DISCOUNT_AMOUNT,
  ITEMS,
} from "../../constants/constants";
import { calculateSubtotal, calculateTotal } from "../../utils/utils";
import OrderList from "../OrderList/OrderList";
import styles from "./OrderSummary.module.css";

const OrderSummary = ({ isSubmitting }) => {
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [isEditable, setIsEditable] = useState(true);

  const subTotal = calculateSubtotal(ITEMS);
  const total = calculateTotal(subTotal, SHIPPING_FEE, discount);

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

  return (
    <div className={styles.orderSummary}>
      <h2>Order Summary</h2>

      <OrderList items={ITEMS} />

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
          <span>${SHIPPING_FEE}</span>
        </div>
        <div className={styles.summaryItem}>
          <span>Total</span>
          <span className={styles.total}>${total}</span>
        </div>
      </div>

      <button
        type="submit"
        className={styles.checkoutButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Placing Order..." : "Checkout"}
      </button>

      <ToastContainer />
    </div>
  );
};

export default OrderSummary;
