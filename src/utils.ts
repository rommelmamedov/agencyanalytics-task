const convertBytesToMB = (bytes: number) => parseFloat((bytes / (1024 * 1024)).toFixed(1));
const classNames = (...classNames: (string | undefined)[]) => classNames.filter(Boolean).join(' ');
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  return formatter.format(date);
};
export { classNames, convertBytesToMB, formatDate };
