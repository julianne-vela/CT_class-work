const rgbToHex = require('./rgb-to-hex');

describe('rgb to hex function', () => {
  it('takes in an rgb and returns the correct hex string', () => {
    const hex = rgbToHex({
      red: 255,
      green: 5,
      blue: 10,
    });
    expect(hex).toEqual('#FF050A');
  });
});
