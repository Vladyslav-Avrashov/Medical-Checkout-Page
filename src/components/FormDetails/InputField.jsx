import { Field, ErrorMessage, useFormikContext } from "formik";
import styles from "./FormDetails.module.css";

const InputField = ({ name, label, type = "text" }) => {
  const { errors, touched } = useFormikContext();
  const hasError = errors[name] && touched[name];

  return (
    <div className={`${styles.inputGroup} ${hasError ? styles.hasError : ""}`}>
      <Field name={name} type={type} id={name} placeholder=" " />
      <label htmlFor={name}>{label}</label>
      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
};

export default InputField;
