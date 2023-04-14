export const convertBytesToMB = (bytes: number) => parseFloat((bytes / (1024 * 1024)).toFixed(1));

export const classNames = (...classNames: (string | undefined)[]) => classNames.filter(Boolean).join(' ');

export const formatDate = (dateString: string) => {
  const formatter = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  return formatter.format(new Date(dateString));
};
