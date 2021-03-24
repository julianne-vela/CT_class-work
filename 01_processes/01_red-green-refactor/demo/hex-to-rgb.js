const getHexPart = (hex, index) => {
  const start = index * 2;
  return hex.slice(start, start + 2);
};

const hexToDecimal = (hex) => Number.parseInt(hex, 16);

const getHexPartInDecimal = (hex, index) => {
  const hexPart = getHexPart(hex, index);
  return hexToDecimal(hexPart);
};

const hexToRgb = (hex) => ({
  red: getHexPartInDecimal(hex, 0),
  green: getHexPartInDecimal(hex, 1),
  blue: getHexPartInDecimal(hex, 2),
});

module.exports = hexToRgb;
