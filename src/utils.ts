const convertBytesToMB = (bytes: number) => parseFloat((bytes / (1024 * 1024)).toFixed(1));
const classNames = (...classNames: (string | undefined)[]) => classNames.filter(Boolean).join(' ');

export { classNames, convertBytesToMB };
