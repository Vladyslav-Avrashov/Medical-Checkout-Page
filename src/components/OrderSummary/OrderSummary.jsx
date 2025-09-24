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

const OrderSummary = ({
  isSubmitting,
  onPromoCodeChange,
  appliedPromoCode,
}) => {
  const dispatch = useDispatch();
  const [promoCodeInput, setPromoCodeInput] = useState(appliedPromoCode || "");

  useEffect(() => {
    setPromoCodeInput(appliedPromoCode || "");
  }, [appliedPromoCode]);

  const items = useSelector(selectCartItems);
  const subTotal = useSelector(selectCartSubTotal);
  const totalWithShipping = useSelector(selectCartTotalWithShipping);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const handleApplyPromoCode = () => {
    const trimmedCode = promoCodeInput.trim();
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;

    if (!trimmedCode) {
      toast.error("Please enter a promo code!");
      setPromoCodeInput("");
      return;
    }

    if (!alphanumericRegex.test(trimmedCode)) {
      toast.error("Promo code can only contain English letters and numbers!");
      setPromoCodeInput("");
      return;
    }

    onPromoCodeChange(trimmedCode);
    toast.success(`Promo code applied: ${trimmedCode}`);
  };

  const handleRemovePromoCode = () => {
    onPromoCodeChange("");
    toast.info("Promo code removed");
  };

  const handlePromoCodeInputChange = (e) => {
    setPromoCodeInput(e.target.value);
  };

  const isPromoApplied = Boolean(appliedPromoCode);

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
            value={promoCodeInput}
            onChange={handlePromoCodeInputChange}
            placeholder="Promotion or Discount code"
            className={isPromoApplied ? styles.promoCodeApplied : ""}
            disabled={isPromoApplied}
          />
          {isPromoApplied ? (
            <button
              type="button"
              className={styles.changePromoButton}
              onClick={handleRemovePromoCode}
            >
              Remove Code
            </button>
          ) : (
            <button
              type="button"
              className={styles.applyPromoButton}
              onClick={handleApplyPromoCode}
              disabled={!promoCodeInput.trim()}
            >
              Apply Code
            </button>
          )}
        </div>
        {isPromoApplied && (
          <p className={styles.promoSuccess}>
            Promo code applied: {appliedPromoCode}
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
          <span className={styles.total}>${totalWithShipping}</span>
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
