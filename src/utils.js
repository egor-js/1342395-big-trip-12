export const randomInt = (firstParam, secondParam) => {
  if (!secondParam) {
    return Math.round(Math.random() * firstParam);
  } else {
    return Math.round(Math.random() * (secondParam - firstParam) + firstParam);
  }
};
