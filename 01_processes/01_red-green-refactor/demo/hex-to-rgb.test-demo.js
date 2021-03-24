const hexToRgb = require('./hex-to-rgb');

describe('hex to rgb function', () => {
  it('takes a hex value of FF050A and returns the correct rgb value', () => {
    const rgb = hexToRgb('FF050A');

    expect(rgb).toEqual({
      red: 255,
      green: 5,
      blue: 10,
    });
  });

  it('takes a hex value of FFFFFF and returns the correct rgb value', () => {
    const rgb = hexToRgb('FFFFFF');

    expect(rgb).toEqual({
      red: 255,
      green: 255,
      blue: 255,
    });
  });
});
