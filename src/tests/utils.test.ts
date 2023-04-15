import { convertBytesToMB, classNames, formatDate } from 'utils';

describe('convertBytesToMB', () => {
  test('should convert bytes to megabytes correctly', () => {
    expect(convertBytesToMB(0)).toBe(0);
    expect(convertBytesToMB(1048576)).toBe(1);
    expect(convertBytesToMB(3145728)).toBe(3);
    expect(convertBytesToMB(15728640)).toBe(15);
  });
});

describe('classNames', () => {
  test('should concatenate class names correctly', () => {
    expect(classNames('foo', 'bar', 'baz')).toBe('foo bar baz');
    expect(classNames('foo', undefined, 'bar', null, 'baz')).toBe('foo bar baz');
    expect(classNames()).toBe('');
  });
});

describe('formatDate', () => {
  test('should format date string correctly', () => {
    expect(formatDate('2021-12-31')).toBe('December 31, 2021');
    expect(formatDate('2022-04-15')).toBe('April 15, 2022');
    expect(formatDate('2023-01-01')).toBe('January 1, 2023');
  });
});
