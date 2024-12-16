function calculatingPrice() {
  const randomPrice = Math.floor(Math.random() * (60 - 10 + 1)) + 10;
  return randomPrice;
}
export { calculatingPrice };
