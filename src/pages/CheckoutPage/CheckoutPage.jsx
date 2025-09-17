import { Formik, Form } from "formik";
import CardList from "../../components/CardList/CardList";
import OrderForm from "../../components/OrderForm/OrderForm";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import { CARDS } from "../../constants/constants";
import { checkoutValidationSchema } from "../../utils/validationSchemas";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./CheckoutPage.module.css";

const CheckoutPage = () => {
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

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    toast.success("✅ Order submitted successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    setTimeout(() => {
      resetForm();
      setSubmitting(false);
    }, 2000);
  };

  return (
    <div className={styles.checkoutPage}>
      <h1 className={styles.checkoutTitle}>Checkout</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={handleSubmit}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ isSubmitting, status }) => (
          <>
            {status && (
              <div className={`${styles.statusMessage} ${styles[status.type]}`}>
                {status.message}
              </div>
            )}
            <Form className={styles.checkoutContent}>
              <OrderForm />
              <OrderSummary isSubmitting={isSubmitting} />
            </Form>
          </>
        )}
      </Formik>

      <CardList cards={CARDS} />
    </div>
  );
};

export default CheckoutPage;
