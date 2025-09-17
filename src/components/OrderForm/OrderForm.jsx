import styles from "./OrderForm.module.css";
import FormDetails from "../FormDetails/FormDetails";
import OptionSelector from "../OptionSelector/OptionSelector";

const OrderForm = () => {
  return (
    <div className={styles.orderForm}>
      <FormDetails />

      <OptionSelector
        name="shippingMethod"
        title="Shipping Method"
        options={[
          "Odeon Express",
          "Cipay Jet",
          "Gorgom Express",
          "Eunioa Fast",
        ]}
      />

      <OptionSelector
        name="paymentMethod"
        title="Payment Method"
        options={["Credit Card", "PayPal"]}
      />
    </div>
  );
};

export default OrderForm;
