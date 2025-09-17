export const calculateSubtotal = (items) => {
  return items.reduce((acc, item) => acc + item.price, 0);
};

export const calculateTotal = (subtotal, shippingFee, discount) => {
  return subtotal + shippingFee - discount;
};
