import InputField from "./InputField";
import styles from "./FormDetails.module.css";

const FormDetails = () => {
  return (
    <div className={styles.formDetails}>
      <h3>Personal Details</h3>
      <InputField name="fullName" label="Full Name" />
      <InputField name="email" type="email" label="Email Address" />
      <InputField name="phoneNumber" label="Phone Number" />

      <h3>Shipping Details</h3>
      <InputField name="streetAddress" label="Street Address" />

      <div className={styles.inputRow}>
        <InputField name="city" label="City" />
        <InputField name="zipCode" label="Zip Code" />
      </div>

      <InputField name="country" label="Country" />
    </div>
  );
};

export default FormDetails;
