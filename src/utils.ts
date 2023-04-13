const convertBytesToMB = (bytes: number) => (bytes / (1024 * 1024)).toFixed(2);
const classNames = (...classNames: (string | undefined)[]) => classNames.filter(Boolean).join(' ');

export { classNames, convertBytesToMB };
