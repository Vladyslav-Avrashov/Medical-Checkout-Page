import * as Yup from "yup";

const PHONE_REGEX = /^[\+]?[1-9][\d]{0,15}$/;

export const checkoutValidationSchema = Yup.object({
  fullName: Yup.string()
    .required("Full Name is required")
    .min(2, "Full Name must be at least 2 characters")
    .max(50, "Full Name cannot exceed 50 characters")
    .trim(),

  email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email address")
    .lowercase()
    .trim(),

  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .matches(PHONE_REGEX, "Please enter a valid phone number")
    .min(10, "Phone number must be at least 10 digits")
    .max(16, "Phone number cannot exceed 16 characters"),

  streetAddress: Yup.string()
    .required("Street Address is required")
    .min(5, "Street Address must be at least 5 characters")
    .max(100, "Street Address cannot exceed 100 characters")
    .trim(),

  city: Yup.string()
    .required("City is required")
    .min(2, "City must be at least 2 characters")
    .max(50, "City cannot exceed 50 characters")
    .trim(),

  zipCode: Yup.string()
    .required("Zip Code is required")
    .matches(/^\d+$/, "Zip Code must contain only numbers"),

  country: Yup.string()
    .required("Country is required")
    .min(2, "Country must be at least 2 characters")
    .max(50, "Country cannot exceed 50 characters")
    .trim(),

  shippingMethod: Yup.string().required("Please select a shipping method"),

  paymentMethod: Yup.string().required("Please select a payment method"),
});
