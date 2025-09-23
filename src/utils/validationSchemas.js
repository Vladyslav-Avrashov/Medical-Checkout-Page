import * as Yup from "yup";

const PHONE_REGEX = /^[\+]?[1-9][\d]{0,15}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|ua)$/;

export const checkoutValidationSchema = Yup.object({
  fullName: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name should be no longer than 30 characters")
    .trim(),

  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|ua)$/,
      "The email must have a domain ending in .com, .org, .net, or .ua."
    )
    .max(30, "Email should be no longer than 30 characters")
    .lowercase()
    .trim(),

  phoneNumber: Yup.string()
    .required("Phone is required")
    .matches(PHONE_REGEX, "Phone must be a valid phone number"),

  streetAddress: Yup.string()
    .required("Address is required")
    .min(3, "Address must be at least 3 characters")
    .max(30, "Address should be no longer than 30 characters")
    .trim(),

  city: Yup.string()
    .required("City is required")
    .min(3, "City must be at least 3 characters")
    .max(30, "City should be no longer than 30 characters")
    .trim(),

  zipCode: Yup.string()
    .required("Postal code is required")
    .min(3, "Postal code must be at least 3 characters")
    .max(10, "Postal code should be no longer than 10 characters")
    .trim(),

  country: Yup.string()
    .required("Country is required")
    .min(3, "Country must be at least 3 characters")
    .max(30, "Country should be no longer than 30 characters")
    .trim(),

  shippingMethod: Yup.string()
    .required("Shipping method is required")
    .oneOf(
      ["Odeon Express", "Cipay Jet", "Gorgom Express", "Eunioa Fast"],
      "Shipping method must be one of: Odeon Express, Cipay Jet, Gorgom Express, Eunioa Fast"
    ),

  paymentMethod: Yup.string()
    .required("Payment method is required")
    .oneOf(
      ["Credit Card", "PayPal"],
      "Payment method must be one of: Credit Card, PayPal"
    ),
});
