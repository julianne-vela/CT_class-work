const decimalToHex = (dec) => dec.toString(16).padStart(2, '0');

const rgbToHex = ({ red, green, blue }) => {
  const redInHex = decimalToHex(red);
  const greenInHex = decimalToHex(green);
  const blueInHex = decimalToHex(blue);

  return `#${redInHex}${greenInHex}${blueInHex}`.toUpperCase();
};

module.exports = rgbToHex;
