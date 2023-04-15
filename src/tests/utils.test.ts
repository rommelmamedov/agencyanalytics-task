import { convertBytesToMB } from 'utils';

describe('convertBytesToMB', () => {
  test('should convert bytes to megabytes correctly', () => {
    expect(convertBytesToMB(0)).toBe(0);
    expect(convertBytesToMB(1048576)).toBe(1);
    expect(convertBytesToMB(3145728)).toBe(3);
    expect(convertBytesToMB(15728640)).toBe(15);
  });
});
