import { Field, useFormikContext, ErrorMessage } from "formik";
import styles from "./OptionSelector.module.css";

const OptionSelector = ({ name, title, options }) => {
  const { values, errors, touched } = useFormikContext();
  const hasError = errors[name] && touched[name];

  return (
    <div className={`${styles.selector} ${hasError ? styles.hasError : ""}`}>
      <h3>{title}</h3>
      <div className={styles.optionGrid}>
        {options.map((option) => (
          <label
            key={option}
            className={`${styles.optionCard} ${
              values[name] === option ? styles.selected : ""
            }`}
          >
            <Field
              type="radio"
              name={name}
              value={option}
              className={styles.radioInput}
            />
            <div className={styles.optionContent}>
              <div className={styles.optionPlaceholder}></div>
              <div className={styles.checkmark}></div>
              <span>{option}</span>
            </div>
          </label>
        ))}
      </div>
      <ErrorMessage name={name} component="div" className={styles.error} />
    </div>
  );
};

export default OptionSelector;
