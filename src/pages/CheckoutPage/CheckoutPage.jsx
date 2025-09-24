import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import OrderForm from "../../components/OrderForm/OrderForm";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import CardList from "../../components/CardList/CardList";

import { CARDS, SHIPPING_FEE } from "../../constants/constants";
import { checkoutValidationSchema } from "../../utils/validationSchemas";

import styles from "./CheckoutPage.module.css";
import { selectCartItems } from "../../redux/cart/selectors";
import { createOrder } from "../../redux/order/operations";
import { fetchCart } from "../../redux/cart/operations";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const [promoCode, setPromoCode] = useState("");

  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    country: "",
    shippingMethod: "",
    paymentMethod: "",
  };

  const handlePromoCodeChange = (newPromoCode) => {
    setPromoCode(newPromoCode);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    if (items.length === 0) {
      toast.error("Your cart is empty!");
      setSubmitting(false);
      return;
    }

    const orderData = {
      name: values.fullName,
      email: values.email,
      phone: values.phoneNumber,
      address: values.streetAddress,
      city: values.city,
      postalCode: values.zipCode,
      country: values.country,
      shippingMethod: values.shippingMethod,
      paymentMethod: values.paymentMethod,
      ...(promoCode && { promoCode }),
    };

    try {
      await dispatch(createOrder(orderData)).unwrap();
      await dispatch(fetchCart());
      toast.success("✅ Order submitted successfully!", {
        position: "top-right",
        autoClose: 2000,
      });

      resetForm();
      setPromoCode("");
    } catch (error) {
      toast.error(`Failed to place order: ${error}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.checkoutPage}>
      <h1 className={styles.checkoutTitle}>Checkout</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={handleSubmit}
        validateOnChange
        validateOnBlur
      >
        {({ isSubmitting }) => (
          <Form className={styles.checkoutContent}>
            <OrderForm />
            <OrderSummary
              isSubmitting={isSubmitting}
              onPromoCodeChange={handlePromoCodeChange}
              appliedPromoCode={promoCode}
            />
          </Form>
        )}
      </Formik>

      <CardList cards={CARDS} />
    </div>
  );
};

export default CheckoutPage;
